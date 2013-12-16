// Test a config as a JavaScript object

var assert = require("assert");
var load_configs = require("../../load_configs");

module.exports = function (grunt) {
  load_configs("tasks");

  assert.strictEqual(
    grunt.config("example.value"), true,
    "The config wasn't properly loaded from a JavaScript file"
  );

  grunt.registerTask("default", []);
}
