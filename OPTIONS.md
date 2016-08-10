# Options
You can use the configuration options available below for this plugin. These options include:

* [Global Options](#global-options)
* [Build Options](#build-options)
* [Serve Options](#serve-options)

Refer to the [Jekyll Documentation](http://jekyllrb.com/docs/configuration) for additional options.

## Global Options

#### src
Type: `string` <br>
Default: `.`

The directory where Jekyll will read files.

#### dest
Type: `string` <br>
Default: `./_site`

The directory where Jekyll will write files.

#### safe
Type: `boolean` <br>
Default: `true`

Disables custom plugins. This option is automatically set to `true` in the plugin to emulate how GitHub Pages will publish your site.

## Build Options

#### serve
Type: `boolean` <br>
Default: `false`

Builds the site and starts a local Jekyll development server on [http://localhost:4000](http://localhost:4000). If `serve` is false, the site will build itself using the `build` command.

Serve mode does last forever. Kill it by pressing <kbd>Ctrl+C</kbd>. For complex projects, use [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) instead.

#### watch
Type: `boolean` <br>
Default: `false`

Enables auto-regeneration of the site when files are modified.

To run multiple watch tasks in a project, use [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) instead.

#### no_watch
Type: `boolean` <br>
Default: `false`

Disables auto-regeneration of the site when files are modified.

#### config
Type: `string` <br>
Default: `_config.yml`

Specifies config files instead of using `_config.yml` automatically. Settings in later files override settings in earlier files.

#### drafts
Type: `boolean` <br>
Default: `false`

Processes and renderes draft posts.

#### raw
Type: `string`

Creates a temporary `_config.yml` with the contents of `raw`. This config file takes precedence over other config files.

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

#### force_polling
Type: `boolean` <br>
Default: `false`

Force watch to use polling.

#### verbose
Type: `boolean` <br>
Default: `false`

Prints verbose output.

#### quiet
Type: `boolean` <br>
Default: `false`

Silence the normal output from Jekyll during a build.

#### incremental
Type: `boolean` <br>
Default: `false`

Experimental incremental build feature. Only re-builds posts and pages that have changed, resulting in significant performance improvements for large sites, but may also break site generation in certain cases.

## Serve Options

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
