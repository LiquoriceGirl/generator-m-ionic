/*global describe, it, before*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var config = require(path.join(__dirname, '../utils/config.js'));

describe('m:constant', function () {
  describe('m:constant some', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../constant'))
        .withArguments('some')
        .on('end', done);
    });

    it('constant file contents', function () {
      var filePath = 'app/' + config.DEFAULT_MODULE + '/constants/some-const.js';
      assert.fileContent([
        [filePath, 'angular.module(\'' + config.DEFAULT_MODULE + '\')'],
        [filePath, 'constant(\'some\',']
      ]);
    });
  });

  describe('m:constant someThing myModule', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../constant'))
        .withArguments('someThing myModule')
        .on('end', done);
    });

    it('constant file contents', function () {
      var filePath = 'app/my-module/constants/some-thing-const.js';
      assert.fileContent([
        [filePath, 'angular.module(\'myModule\')'],
        [filePath, 'constant(\'someThing\',']
      ]);
    });
  });
});
