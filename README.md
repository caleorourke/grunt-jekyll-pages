<a href="https://travis-ci.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://travis-ci.org/caleorourke/grunt-jekyll-pages.svg?branch=master"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages.svg?theme=shields.io"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages#info=devDependencies" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages/dev-status.svg?theme=shields.io"></a>
<a href="http://github.com/caleorourke/grunt-jekyll-pages/blob/master/MIT-LICENSE" target="_blank"><img src="http://img.shields.io/badge/License-MIT-blue.svg" alt="MIT-license badge"></a>

# grunt-jekyll-pages
> Serve GitHub-flavored sites natively using Jekyll.

[grunt-jekyll-pages](https://github.com/caleorourke/grunt-jekyll-pages) is a Grunt.js plugin designed to emulate how Github harnesses Jekyll in safe mode. You can also use this plugin to manually script tasks for compiling, serving, and watching Jekyll locally.

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
$ [sudo] gem install github-pages
$ [sudo] npm install
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

## Options
You can use the [configuration options](https://github.com/caleorourke/grunt-jekyll-pages/blob/master/OPTIONS.md) available for this plugin. Refer to [Jekyll Documentation](http://jekyllrb.com/docs/configuration) for additional options.

## Usage Examples
Follow this [Grunt example](http://gist.github.com/caleorourke/a6d09df41bca1bc4c224) to get started with `grunt-jekyll-pages` quickly. Additional examples are below.

### Example 1: Single Task
In this example, running `grunt default` will fire off the task.

```js
grunt.initConfig({
  pages: {                              // Task
    options: {                          // Universal options
      bundleExec: true,
      src : '<%= app %>'
    },
    dist: {                             // Target
      options: {                        // Target options
        dest: '<%= dist %>',
        config: '_config.yml,_config.build.yml'
      }
    },
    serve: {                            // Another target
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

### Example 2: Multiple Tasks
In this example, running `grunt serve` will fire off one task, and  `grunt test` will fire off the other.

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

### Example 3: Raw Usage
```js
grunt.initConfig({
  pages: {
    dist: {
      options: {
        config: '_config.yml',
        // Construct a string with JavaScript. Remember, in YAML, line breaks and indentation matter.
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
$ grunt test
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

## Release History
* 1.1.0: Bump `grunt` to 1.0.1, update README.md content, merge peerDependencies pull request
* 1.0.3: Bump `grunt-contrib-jshint` to 1.0.0
* 1.0.2: Happy 2016, cleanse README content, include additional rvm packages
* 1.0.1: Bump `tmp` dependency to 0.0.28, include `grunt test`
* 1.0.0: General Availability
* 0.5.0: Convert `.travis.yml` default from node.js to ruby
* 0.4.4: Bump `tmp` dependency to 0.0.27
* 0.4.3: Include `grunt-cli` natively in `.travis.yml` to fix build failure
* 0.4.2: Bump `tmp` dependency to 0.0.25
* 0.4.1: Happy 2015, bump `grunt-contrib-jshint` to 0.11.0, bump `grunt-mocha-test` to 0.12.7
* 0.4.0: Update runtime and dev dependencies, update README.md content
* 0.3.0: New home for repository
* 0.2.0: Limit Node.js engine to `>= 0.10`
* 0.1.0: Initial release candidate

## License
Copyright (c) 2014-2016 Michael O'Rourke under terms of the [MIT License](https://github.com/caleorourke/grunt-jekyll-pages/blob/master/MIT-LICENSE).
