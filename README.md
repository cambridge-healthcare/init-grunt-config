init-grunt-config
=================

Load grunt tasks and configuration files, set values, and bundle everything into grunt.initConfig.

### Usage

Instead of defining everything inside `grunt.initConfig`, you can do the following:

```
var init_config = require("init-grunt-config");

init_config({
  // Your usual grunt config variables
  pkg: grunt.file.readJSON("package.json"),

  // Specify a folder that holds all of your
  // task configuration files in the form taskname.js
  tasks: "tasks"
});
```

The tasks folder:

```
|- Gruntfile.js
|- tasks
|-- clean.js
|-- copy.js
|-- ...
```

Example task file:

```
// clean.js

module.exports = {
  tmp_files: ["./tmp/*"],
  sass_files: ["./styles/sass"]
}
```

Voilà - the Gruntfile is now cleaner and more manageable, and each grunt plugin has its own separate file!

