'use strict';

var assert = require('assert');
var grunt  = require('grunt');

exports.pages = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('./test/actual/index.html');
    var expected = grunt.file.read('./test/expected/index.html');

    assert.equal(actual, expected);

    test.done();
  },
};