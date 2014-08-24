<a href="https://travis-ci.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://travis-ci.org/caleorourke/grunt-jekyll-pages.svg?branch=master"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages.svg?theme=shields.io"></a>
<a href="https://david-dm.org/caleorourke/grunt-jekyll-pages#info=devDependencies" target="_blank"><img src="https://david-dm.org/caleorourke/grunt-jekyll-pages/dev-status.svg?theme=shields.io"></a>
<a href="http://github.com/caleorourke/grunt-jekyll-pages/blob/master/LICENSE.md" target="_blank"><img src="http://img.shields.io/badge/License-MIT-blue.svg" alt="MIT-license badge"></a>

# grunt-jekyll-pages

> Serve GitHub-flavored sites natively using Jekyll.

## Getting Started
This plugin requires Node `>= 0.8.0`, Grunt `~0.4.5` and GitHub Pages `~21`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jekyll-pages --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jekyll-pages');
```

## Overview
Setup your `Gruntfile.js` to use any of the available options below. Add a section named `pages` to the data object passed into `grunt.initConfig()`.

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
Type: `string` <br/>
Default: `.`

Change the directory where Jekyll will read files.

#### dest
Type: `string` <br/>
Default: `./_site`

Change the directory where Jekyll will write files.

#### plugins
Type: `string` <br/>
Default: `./_plugins`

The directory for plugins.

#### layouts
Type: `string` <br/>
Default: `./_layouts`

The directory for layouts.

#### data_source
Type: `string` <br/>
Default: `./_data`

The directory for data files.

#### safe
Type: `boolean` <br/>
Default: `false`

Disable custom plugins and ignore symbolic links. If you're using GitHub to publish your site, this option will automatically be set to `false`.

### Build Command Options

#### serve
Type: `boolean` <br/>
Default: `false`

Build the site and start a local Jekyll development server on [http://localhost:4000](http://localhost:4000). If `serve` is false, the site will build itself using the `build` command.

Serve mode does last forever. Kill it by pressing <kbd>Ctrl+C</kbd>.

For complex projects, use [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) instead.

#### watch
Type: `boolean` <br/>
Default: `false`

Enable auto-regeneration of the site when files are modified.

To run multiple watch tasks in a project, use [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) instead.

#### config
Type: `string` <br/>
Default: `_config.yml`

Specify config files instead of using `_config.yml` automatically. Settings in later files override settings in earlier files.

#### raw
Type: `string`

Creates a temporary `_config.yml` with the contents of `raw`. This config file takes precedence over other config files.

#### drafts
Type: `boolean` <br/>
Default: `false`

Process and render draft posts.

#### future
Type: `boolean` <br/>
Default: `true`

Publish posts with a future date.

#### lsi
Type: `boolean` <br/>
Default: `false`

Produce an index for related posts.

#### limit_posts
Type: `number` <br/>
Default: `0`

Limit the number of posts to parse and publish.

### Serve Command Options

#### port
Type: `string` or `number` <br/>
Default: `4000`

Listen on the given port (requires `serve`).

#### host
Type: `string` <br/>
Default: `0.0.0.0`

Listen at the given hostname (requires `serve`).

#### baseurl
Type: `string` <br/>
Default: `""`

Serve the website from the given base URL (requires `serve`).

#### detach
Type: `boolean` <br/>
Default: `false`

Detach the server from the terminal.

#### bundleExec
Type: `boolean` <br/>
Default: `false`

Run `jekyll` with [bundle exec](http://gembundler.com/v1.3/man/bundle-exec.1.html).

## Usage Examples
Follow this [Grunt example](http://gist.github.com/caleorourke/a6d09df41bca1bc4c224) to get started with `grunt-jekyll-pages` quickly.

### Example Config No. 1
In this example, running `grunt default` will fire off the task.

```js
grunt.initConfig({
    pages: {                               // Task
        options: {                          // Universal options
            bundleExec: true,
            src : '<%= app %>'
        },
        dist: {                             // Target
            options: {                      // Target options
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

### Example Config No. 2
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
                // Construct a string with JavaScript.
                // Remember, in YAML line breaks and indentation matter.
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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

## Release History
* 0.1.0: Initial Release

## License
Copyright (c) 2014 SoftLayer, an IBM Company, under the terms of the [MIT License](LICENSE.md).
