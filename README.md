<a href="https://travis-ci.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://travis-ci.org/caleorourke/grunt-jekyll-pages.svg?branch=master"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages.svg?theme=shields.io"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages#info=devDependencies" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages/dev-status.svg?theme=shields.io"></a>
<a href="http://github.com/caleorourke/grunt-jekyll-pages/blob/master/MIT-LICENSE" target="_blank"><img src="http://img.shields.io/badge/License-MIT-blue.svg" alt="MIT-license badge"></a>

# grunt-jekyll-pages
> Serve GitHub-flavored sites natively using Jekyll.

[grunt-jekyll-pages](https://github.com/caleorourke/grunt-jekyll-pages) is a Grunt.js plugin designed to emulate how Github runs Jekyll in safe mode. This plugin also allows you to manually script tasks, such as build, serve, and watch, for Jekyll locally.

## Getting Started
This plugin requires Node `>= 0.10`, Grunt `~0.4.5` and GitHub Pages `~21`.

If you haven't used [Grunt](http://gruntjs.com) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide. It explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jekyll-pages --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jekyll-pages');
```

## Local Install
Run the following commands.

```bash
gem install github-pages
npm install
```

## Overview
Setup your `Gruntfile.js` to use any of the options below by adding a section named `pages` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pages: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

Use this method to add or append configuration options, targets, etc., to the `pages` task.

```js
grunt.initConfig({
  pages: {                        // Task
    options: {                    // Universal options
      bundleExec: true,
      src : '<%= app %>'
    },
    dist: {                       // Target
      options: {                  // Target options
        dest: '<%= dist %>',
        config: '_config.yml,_config.build.yml'
      }
    },
    serve: {                      // Another target
      options: {
        dest: '.jekyll',
        drafts: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-jekyll-pages');

grunt.registerTask('default', ['pages']);
```

## Options
You can use the [configuration options](https://github.com/caleorourke/grunt-jekyll-pages/blob/master/OPTIONS.md) available for this plugin. Refer to the [Jekyll Documentation](http://jekyllrb.com/docs/configuration) for additional options.

## Usage Examples
Follow these Grunt examples to get started with grunt-jekyll-pages quickly.

### Single Task
This example includes one registered task. `grunt verify` generates the site locally and makes it available at [10.0.0.1:8080](10.0.0.1:8080).

```js
grunt.initConfig({
  pages: {
    preview: {
      options: {
        serve: true,
        host: '10.0.0.1'
        port: '8080'
      }
    }
  }
});

grunt.loadNpmTasks("grunt-jekyll-pages");


grunt.registerTask("verify", ["pages:preview"]);
```

### Multiple Tasks
This example includes two registered tasks. `grunt serve` generates the site locally, watches for changes, and makes it available at [localhost:4000](localhost:4000). `grunt test` generates the site and displays on-screen warnings for symlink errors.

```js
grunt.initConfig({
  pages: {
    test: {},
    serve: {
      options: {
        watch: true,
        serve: true,
        baseurl: ['\"\"']
      }
    }
  }
});

grunt.loadNpmTasks('grunt-jekyll-pages');


grunt.registerTask('serve', ['pages:serve']);
grunt.registerTask('test',  ['pages:test']);
```

### Raw Usage
```js
grunt.initConfig({
  pages: {
    dist: {
      options: {
        config: '_config.yml',
        // Construct a string with JavaScript
        // Remember line breaks and indentation matter in YAML
        raw: 'highlighter: pygments\n' +
        'exclude: [\'development\']\n' +
        'author:\n' +
        '  name: ' + fetchAuthor() + '\n' +
        '  email: ' + fetchEmail()
      }
    }
  }
});
```

## Testing
Run the following command to test this plugin.

```shell
$ grunt test-plugin
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

## Release History
* 1.1.1: Fix `grunt-test` condition, Include additional rvm package
* 1.1.0: Bump `grunt` to 1.0.1, merge peerDependencies pull request
* 1.0.3: Bump `grunt-contrib-jshint` to 1.0.0
* 1.0.2: Include additional rvm packages
* 1.0.1: Bump `tmp` to 0.0.28
* 1.0.0: General Availability
* 0.5.0: Convert `.travis.yml` from node.js to ruby, include `grunt test`
* 0.4.0: Include `grunt-cli` natively in `.travis.yml` to fix build failure
* 0.3.2: Bump `tmp` to 0.0.25
* 0.3.1: Bump `grunt-contrib-jshint` to 0.11.0, bump `grunt-mocha-test` to 0.12.7
* 0.3.0: Update runtime and dev dependencies
* 0.2.0: Limit Node.js engine to `>= 0.10`
* 0.1.0: Initial release candidate
