# ngEnvGen - Angular Environment Generator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2. and Git-Bash version 4.4.23(1)-release.


## Git Bash

Download git from (https://git-scm.com/). You shoud now be able to use the Git Bash shell and scriptiong language.


## ngEnvGen Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
Thanks to the `build.sh` Bash script and some JavaScript files (EnvService, env folder, env.js and its import from the index.html and angular.json),
you could customly name the public folder to deploy to as well as the diferent environments. Feel free to add more environments in the env folder
and type the EnvConfig objects as you please.
When building the dist, we have 2 options: 
- A. generate the selected env.js file and automatically place it inside the public folder.
- B. generate no env.js inside the public folder, but add a config folder with all the env.js options, so we can add ahqtever of those files manually.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
