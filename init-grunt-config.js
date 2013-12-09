"use strict";

var grunt = require("grunt");

module.exports = init_config;

function init_config (options) {
  grunt.initConfig(options);
  load_task_configs(options.task_configs);
}

function load_task_configs (path) {
  var config_files = grunt.file.expand(path + "/*");

  config_files.forEach(function (file) {
    var plugin = get_filename(file);
    var options = require(process.cwd() + "/" +  file);
    if (typeof options === "function") {
      options = options(grunt);
    }
    grunt.config(plugin, options);
  });
}

function get_filename (file) {
  var nodes = file.split("/");
  var leaf = nodes[nodes.length - 1];
  return leaf.replace(/\.js$/, "");
}
