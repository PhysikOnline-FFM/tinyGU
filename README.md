# TinyGU

## Requirements
- https://angular.io/
- https://material.angular.io/
- https://github.com/angular/flex-layout
- ~~https://github.com/trimox/angular-mdc-web (only for the mdc-textfield-box)~~

## Automatic deployment on GitHub Pages

[![Build Status](https://travis-ci.org/PhysikOnline-FFM/tinyGU.svg)](https://travis-ci.org/PhysikOnline-FFM/tinyGU)
**DEMO at
https://physikonline-ffm.github.io/tinyGU**

via Travis CI the Project is automatically built and pushed to the gh-pages branch. The .travis.yml-config file is in the root directoy.

Not set up yet but generally possible would be an integration of greenkeeper.io which automatically updates the packages for the builds at travis.

## Material Color Style

https://material.io/color/#!/?primary.color=005ea8

http://mcg.mbitson.com/#!?mcgpalette0=%23005ea8

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Alternatively when using Webstorm, you can set up a run command. Open "edit configurations" in the "Run" Menu. Add a "Bash" configuration. Now put in your Interpreter Path (cmd on Windows should be located at `C:\Windows\system32\cmd.exe`). And as Interpreter options enter `/k ng serve --port 4200`. now you can run the server by simply running the project.

### Build Angular App

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
