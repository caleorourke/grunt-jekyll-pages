'use strict';

module.exports = function(grunt) {

  var fs = require('fs');
  var tmp = require('tmp');
  var exec = require('child_process').exec;

  grunt.registerMultiTask('pages', 'Serve GitHub-flavored sites natively using Jekyll.', function() {

    var done = this.async();
    var options = this.options();
    var command = 'jekyll';
    var optionList = {

      // Global Options
      'src': '--source',
      'dest': '--destination',
      'safe': true,

      // Build Command Options
      'watch': '--watch',
      'no_watch': '--no-watch',
      'config': '--config',
      'drafts': '--drafts',
      'future': '--future',
      'lsi': '--lsi',
      'limit_posts': '--limit_posts',
      'force_polling': '--force_polling',
      'verbose': '--verbose',
      'quiet': '--quiet',
      'incremental': '--incremental',

      // Serve Command Options
      'port': '--port',
      'server_port': '--port',
      'host': '--host',
      'baseurl': '--baseurl',
      'skip_initial_build': '--skip-initial-build',

      // Deprecated or Unsupported Flags
      'plugins': false,
      'paginate': false,
      'permalink': false,
      'markdown': false,
      'url': false,
      'trace': false
    };

    var majorVersion;
    var rawConfigFile;

    function testExists (next) {
      var versionCommand = options.bundleExec ? 'bundle exec github-pages -v' : 'github-pages -v';
      exec(versionCommand, function(error, stdout) {

        if (error) {
          grunt.log.error(error);
          grunt.fail.warn('Please install the \"github-pages\" gem before running this task.');
          done(false);
        }
        if (stdout) {
          majorVersion = stdout.match(/\d+/);
          next();
        }
      });
    }

    // Create temporary config file if needed
    function configContext (next) {
      if (options.raw) {

        // Tmp file is only available within the context of this function
        tmp.file({ prefix: '_config.', postfix: '.yml' }, function(err, path, fd) {

          rawConfigFile = path;

          if (err) {
            grunt.fail.warn(err);
          }

          // Write raw to file
          fs.writeSync(fd, new Buffer(options.raw), 0, options.raw.length);
          next();
        });
      }
      else {
        next();
      }
    }

    // Run configContext with command execution as a callback
    function runJekyll (next) {

      // Build the command string
      if (options.bundleExec) {
        command = 'bundle exec ' + command;
      }

      if (options.serve) {
        command += majorVersion > 0 ? ' serve' : ' server';
      }
      else {
        command += ' build';
      }

      // Insert temporary config path into the config option
      if (typeof rawConfigFile !== 'undefined') {
        options.config = options.config ? options.config + ',' + rawConfigFile : rawConfigFile;
      }

      // Add flags to command if running serve or build
      Object.keys(optionList).forEach(function(option) {
        if (options[option]) {
          command += ' ' + optionList[option];
          if (typeof options[option] !== 'boolean') {
            command += ' ' + options[option];
          }
          if (!options[option]) {
            grunt.warn('`' + option + '` has been deprecated. You may want to try this as a `raw` option in your Gruntfile or in `_config.yml`.');
          }
        }
      });

      // Execute command
      grunt.log.write('`' + command + '` was initiated.\n');

      if (options.serve) {
        grunt.log.write('Started web server on http://localhost:' + (options.port || 4000) + '. Press Ctrl-C to stop it.\n');
      }

      exec(command, function(err, stdout) {
        grunt.log.write('\n\nJekyll output:\n' + stdout);

        if (err) {
          grunt.fail.warn(err);
          done(false);
        }
        else {
          next();
        }
      });
    }

    // Run the command
    testExists(function() {
      configContext (function() {
        runJekyll(function() {
          done(true);
        });
      });
    });
  });
};
