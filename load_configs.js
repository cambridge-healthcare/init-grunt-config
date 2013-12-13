"use strict";

var grunt = require("grunt");
var path = require("path");

module.exports = load_configs;

function load_configs (file) {
  var config_files = grunt.file.expand(file + "/*");

  config_files.forEach(function (file) {
    var plugin_name = module_name(file);
    var options = require(path.join(process.cwd(), file));

    if (typeof options === "function") {
      options = options(grunt);
    }

    grunt.config(plugin_name, options);
  });
}

function module_name (path) {
  return /([^\/\\]+)\.([^.]+)$/.exec(path)[1];
}
