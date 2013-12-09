"use strict";

var grunt = require("grunt");

module.exports = {
  init_config: init_config,
  load_tasks: load_task_configs
}

function init_config (initial_object, task_configs_path) {
  grunt.initConfig(init_object);
  load_task_configs(task_configs_path);
}

function load_task_configs (path) {
  var config_files = grunt.file.expand(path + "/*");

  config_files.forEach(function (file) {
    var plugin = get_filename(file);
    var options = require(file);
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
