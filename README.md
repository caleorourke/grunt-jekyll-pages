<a href="https://travis-ci.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://travis-ci.org/caleorourke/grunt-jekyll-pages.svg?branch=master"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages.svg?theme=shields.io"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages#info=devDependencies" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages/dev-status.svg?theme=shields.io"></a>
<a href="http://github.com/caleorourke/grunt-jekyll-pages/blob/master/MIT-LICENSE" target="_blank"><img src="http://img.shields.io/badge/License-MIT-blue.svg" alt="MIT-license badge"></a>

# grunt-jekyll-pages
> Serve GitHub-flavored sites natively using Jekyll.

[grunt-jekyll-pages](https://github.com/caleorourke/grunt-jekyll-pages) is for anyone working with GitHub Pages. This Grunt.js plugin emulates how Github Pages runs Jekyll in safe mode on Linux, Unix, or Mac OS X. It also provides a number of options (build, serve, watch, etc.) for dev and testing purposes.

The [npm package](https://www.npmjs.com/package/grunt-jekyll-pages) is available publicly.

## Getting Started
This plugin requires Node `>=0.10` and Grunt `>=0.4.0`.

Jekyll and GitHub Pages ([pages-gem](https://github.com/github/pages-gem)) must also be installed. Refer to the [Jekyll Installation](https://jekyllrb.com/docs/installation) guide for instructions.

If you haven't used [Grunt](http://gruntjs.com) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide. It explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm i grunt-jekyll-pages --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jekyll-pages');
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
      src: '<%= app %>'
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

### No Tasks (Raw)
This example has no specific task defined. `grunt pages:a` builds Jekyll's `_config.yml` file with a set of specific options, while `grunt pages:b` builds the same file with different options.

```js
grunt.initConfig({
  pages: {
    a: {
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
    b: {
      options: {
        config: '_config.yml',
        // Construct a string with JavaScript
        // Remember line breaks and indentation matter in YAML
        raw: 'highlighter: rouge\n' +
        'exclude: [\'production\']\n' +
        'author:\n' +
        '  name: ' + fetchAuthor() + '\n' +
        '  email: ' + fetchEmail()
      }
    }
  }
});

grunt.loadNpmTasks('grunt-jekyll-pages');
```

## Testing
Run the following command to test this plugin.

```shell
$ grunt test-plugin
```

## Contributing
Please read our [Contributing Guidelines](http://github.com/caleorourke/grunt-jekyll-pages/blob/master/CONTRIBUTING.md) before submitting code. In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

## Release History
See our [Release History](http://github.com/caleorourke/grunt-jekyll-pages/blob/master/HISTORY.md) for enhancements and changes applied to each version.