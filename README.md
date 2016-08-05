<a href="https://travis-ci.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://travis-ci.org/caleorourke/grunt-jekyll-pages.svg?branch=master"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages.svg?theme=shields.io"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages#info=devDependencies" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages/dev-status.svg?theme=shields.io"></a>
<a href="http://github.com/caleorourke/grunt-jekyll-pages/blob/master/MIT-LICENSE" target="_blank"><img src="http://img.shields.io/badge/License-MIT-blue.svg" alt="MIT-license badge"></a>

# grunt-jekyll-pages

> Serve GitHub-flavored sites natively using Jekyll.

[Jekyll](https://jekyllrb.com) gives you all the bells and whistles out-of-the-box. Once you push your code to GitHub, though, you may quickly learn Github runs Jekyll in safe mode, meaning certain options are automatically disabled. The "grunt-jekyll-plugin" imitates how Github runs Jekyll in safe mode, thereby helping you avoid or troubleshoot "Page build failed" errors before publishing.

In addition, "grunt-jekyll-plugin" includes a number of simple commands to compile, serve, and watch Jekyll for you.

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
You can use most of the configuration options available in the [Jekyll Documentation](http://jekyllrb.com/docs/configuration).

### Global Configuration

#### src
Type: `string` <br>
Default: `.`

The directory where Jekyll will read files.

#### dest
Type: `string` <br>
Default: `./_site`

The directory where Jekyll will write files.

#### layouts
Type: `string` <br>
Default: `./_layouts`

The directory for layouts.

#### data_source
Type: `string` <br>
Default: `./_data`

The directory for data files.

#### safe
Type: `boolean` <br>
Default: `false`

Disables custom plugins and ignore symbolic links. If you're using GitHub Pages to publish your site, this option will automatically be set to `false`.

### Build Command Options

#### serve
Type: `boolean` <br>
Default: `false`

Builds the site and starts a local Jekyll development server on [http://localhost:4000](http://localhost:4000). If `serve` is false, the site will build itself using the `build` command.

Serve mode does last forever. Kill it by pressing <kbd>Ctrl+C</kbd>.

For complex projects, use [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) instead.

#### watch
Type: `boolean` <br>
Default: `false`

Enables auto-regeneration of the site when files are modified.

To run multiple watch tasks in a project, use [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) instead.

#### config
Type: `string` <br>
Default: `_config.yml`

Specifies config files instead of using `_config.yml` automatically. Settings in later files override settings in earlier files.

#### raw
Type: `string`

Creates a temporary `_config.yml` with the contents of `raw`. This config file takes precedence over other config files.

#### drafts
Type: `boolean` <br>
Default: `false`

Processes and renderes draft posts.

#### future
Type: `boolean` <br>
Default: `true`

Publishs posts with a future date.

#### lsi
Type: `boolean` <br>
Default: `false`

Produces an index for related posts.

#### limit_posts
Type: `number` <br>
Default: `0`

Limits the number of posts to parse and publish.

### Serve Command Options

#### port
Type: `string` or `number` <br>
Default: `4000`

Listens on the given port (requires `serve`).

#### host
Type: `string` <br>
Default: `0.0.0.0`

Listens at the given hostname (requires `serve`).

#### baseurl
Type: `string` <br>
Default: `""`

Serves the website from the given base URL (requires `serve`).

#### detach
Type: `boolean` <br>
Default: `false`

Detaches the server from the terminal.

#### bundleExec
Type: `boolean` <br>
Default: `false`

Runs `jekyll` with [bundle exec](http://gembundler.com/v1.3/man/bundle-exec.1.html).

## Usage Examples
Follow this [Grunt example](http://gist.github.com/caleorourke/a6d09df41bca1bc4c224) to get started with `grunt-jekyll-pages` quickly.

### Example No. 1
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

### Example No. 2
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

### Example Raw Usage
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
Run the following command.

```shell
$ grunt test
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

## Release History
* 1.0.8: Bump `grunt` to 1.0.1, update README.md content
* 1.0.7: Merge peerDependencies pull request
* 1.0.6: Bump `grunt-contrib-jshint` to 1.0.0
* 1.0.5: Fix bad references in README.md
* 1.0.4: Happy 2016!, cleanse README content, include additional rvm packages
* 1.0.3: Rename `LICENSE` to `MIT-LICENSE`
* 1.0.2: Bump `tmp` dependency to 0.0.28
* 1.0.1: Include `grunt test`
* 0.5.0: Convert `.travis.yml` default from node.js to ruby
* 0.4.7: Bump `tmp` dependency to 0.0.27
* 0.4.6: Include `grunt-cli` natively in `.travis.yml` to fix build failure
* 0.4.5: Bump `tmp` dependency to 0.0.25
* 0.4.4: Disable `_plugins` option
* 0.4.3: Fix bad references in README.md, cleanse package.json content
* 0.4.2: Bump `grunt-contrib-jshint` to 0.11.0, bump `grunt-mocha-test` to 0.12.7
* 0.4.1: Happy 2015!
* 0.4.0: Update runtime and dev dependencies, update README.md content, change licensor
* 0.3.0: New home for repository
* 0.2.1: Improve output messages
* 0.2.0: Limit Node.js engine to `>= 0.10`
* 0.1.0: Initial release candidate

## License
Copyright (c) 2014-2016 Michael O'Rourke under terms of the [MIT License](MIT-LICENSE).
