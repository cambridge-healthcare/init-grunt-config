// Test a config in JSON format

var assert = require("assert");
var load_configs = require("../../load_configs");

module.exports = function (grunt) {
  load_configs("tasks");

  assert.strictEqual(
    grunt.config("example.value"), true,
    "The config wasn't properly loaded from JSON"
  );

  grunt.registerTask("default", []);
}
