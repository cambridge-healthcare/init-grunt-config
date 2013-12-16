# init-grunt-config

This plugin helps you organize the configuration of you grunt tasks in
separate file for each task.

## Usage

Instead of defining everything inside `grunt.initConfig`, you can do the following:

```js
var load_configs = require("init-grunt-config");

module.exports = function (grunt) {
  grunt.initConfig({ /* any global options */ });

  // Load your tasks here, for example with load-grunt-tasks plugin.

  // Specify a folder that holds all of your
  // task configuration files in the form taskname.js
  load_configs("tasks");

  // ...
};
```

The tasks folder:

```
|- Gruntfile.js
|- tasks
|-- clean.js
|-- copy.js
|-- ...
```

Example task configuration file:

```js
// clean.js

module.exports = {
  tmp_files: ["./tmp/*"],
  sass_files: ["./styles/sass"]
}
```

Voilà - the Gruntfile is now cleaner and more manageable, and each
grunt plugin has its own separate file!

## Types of configuration files

Each configuration file can be one of:

- JSON file
-   JavaScript file that exports an object

    ```js
    module.exports = { value: true };
    ```

-   JavaScript file that exports a function

    ```js
    module.exports = function (grunt) {
      return {
        value: true
      };
    }
    ```

## Tests

Each test is an example project with a Gruntfile testing only one
specific feature. You can run it with:

```sh
tests/run
```

## Contributing

Please write a test case with before posting a Pull Request. PRs
without tests are considered "requests for comments", which are
welcome too if you want to discus some feature without necessarily
going all the way with implementation.
