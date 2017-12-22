# TinyGU

[//]: # (comments)
[//]: # (https://badges.github.io/gh-badges/)
[//]: # (https://badges.github.io/)
[//]: # (https://shields.io)
[//]: # (https://github.com/dustinmoris/CI-BuildStats)

[![Angular Style Guide](https://img.shields.io/badge/Angular-Styleguide-red.svg)](https://angular.io/guide/styleguide)
[![license](https://img.shields.io/github/license/PhysikOnline-FFM/tinyGU.svg)]()

[![Build history](https://buildstats.info/travisci/chart/PhysikOnline-FFM/tinyGU?buildCount=100)](https://travis-ci.org/PhysikOnline-FFM/tinyGU)

[![Travis branch](https://img.shields.io/travis/PhysikOnline-FFM/tinyGU/master.svg?label=master&nbsp;branch&nbsp;build)](https://github.com/PhysikOnline-FFM/tinyGU)
[![Build Status](https://travis-ci.org/PhysikOnline-FFM/tinyGU.svg)](https://travis-ci.org/PhysikOnline-FFM/tinyGU) 

[![Maintainability](https://api.codeclimate.com/v1/badges/b2c6d2d1733432263fa2/maintainability)](https://codeclimate.com/github/PhysikOnline-FFM/tinyGU/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b2c6d2d1733432263fa2/test_coverage)](https://codeclimate.com/github/PhysikOnline-FFM/tinyGU/test_coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/07d7c397e89040838eb276ac6fee24f6)](https://www.codacy.com/app/klezm/tinyGU?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PhysikOnline-FFM/tinyGU&amp;utm_campaign=Badge_Grade)
[![bitHound Dependencies](https://www.bithound.io/github/PhysikOnline-FFM/tinyGU/badges/dependencies.svg)](https://www.bithound.io/github/PhysikOnline-FFM/tinyGU/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/PhysikOnline-FFM/tinyGU/badges/devDependencies.svg)](https://www.bithound.io/github/PhysikOnline-FFM/tinyGU/master/dependencies/npm)
[![Coverage Status](https://coveralls.io/repos/github/PhysikOnline-FFM/tinyGU/badge.svg?branch=master)](https://coveralls.io/github/PhysikOnline-FFM/tinyGU?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/physikonline-ffm/tinygu/badge.svg)](https://snyk.io/test/github/physikonline-ffm/tinygu)

[![Issue Stats](http://issuestats.com/github/PhysikOnline-FFM/tinyGU/badge/issue?style=flat)](http://issuestats.com/github/PhysikOnline-FFM/tinyGU)
[![Issue Stats](http://issuestats.com/github/PhysikOnline-FFM/tinyGU/badge/pr?style=flat)](http://issuestats.com/github/PhysikOnline-FFM/tinyGU)

[![Github All Releases](https://img.shields.io/github/downloads/PhysikOnline-FFM/tinygu/total.svg?label=all&nbsp;releases)](https://github.com/PhysikOnline-FFM/tinyGU/releases)
[![GitHub release](https://img.shields.io/github/release/PhysikOnline-FFM/tinygu/all.svg)](https://github.com/PhysikOnline-FFM/tinyGU/releases)
[![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/PhysikOnline-FFM/tinyGU.svg?label=prerelease&nbsp;date)]()
[![GitHub Release Date](https://img.shields.io/github/release-date/PhysikOnline-FFM/tinyGU.svg)]()
[![Github commits (since latest release)](https://img.shields.io/github/commits-since/PhysikOnline-FFM/tinygu/latest.svg)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/PhysikOnline-FFM/tinyGU.svg)]()
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/PhysikOnline-FFM/tinyGU/prototype.svg?label=last&nbsp;commit&nbsp;(prototype))]()
[![GitHub issues](https://img.shields.io/github/issues/PhysikOnline-FFM/tinyGU.svg)](https://github.com/PhysikOnline-FFM/tinyGU/issues)
[![](https://img.shields.io/github/issues-raw/PhysikOnline-FFM/tinyGU.svg)]()
[![](https://img.shields.io/github/issues-closed-raw/PhysikOnline-FFM/tinyGU.svg)]()
[![Github search hit counter](https://img.shields.io/github/search/PhysikOnline-FFM/tinyGU/goto.svg)]()
[![Github file size](https://img.shields.io/github/size/PhysikOnline-FFM/tinyGU/src/locale/messages.en-US.xlf.svg?=filesize)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/PhysikOnline-FFM/tinyGU.svg)]()
[![GitHub top language](https://img.shields.io/github/languages/top/PhysikOnline-FFM/tinyGU.svg)]()
[![GitHub language count](https://img.shields.io/github/languages/count/PhysikOnline-FFM/tinyGU.svg)]()


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

`ng serve --aot --i18nFile src/locale/messages.de-DE.xlf --i18nFormat xlf --locale de --missingTranslation ignore -p 4200`

### Build Angular App

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### update Angular
to update Angular: https://angular-update-guide.firebaseapp.com/

`npm outdated`, `npm update` and `npm ls --depth=0` are very handy commands  

replace the version number `@'^5.0.0'` with `@latest` and probably add --save to the end of the command.
On windows run cmd as admin!

to update Angular-CLI: https://github.com/angular/angular-cli#updating-angular-cli

if webpack is missing (`ng version`) install it with `npm install --save-dev webpack` 

### i18n

to generate the source file:
`ng xi18n --locale en-US --i18nFormat=xlf --outputPath src/locale --out-file messages.en-US.xlf` 

### transifex

https://docs.transifex.com/client/installing-the-client

`tx init`
dont change Transifex instance and get a token from https://www.transifex.com/user/settings/api/ 

`tx set --auto-remote https://www.transifex.com/physikonline/tinygu`

https://github.com/PhysikOnline-FFM/tinyGU/tree/master/src/locale/messages.en-US.xlf

`tx push --source`

`tx pull --all`

https://docs.transifex.com/integrations/github#section-integrating-with-travis-ci
https://sites.google.com/site/transjoomla/transifex-tutorials/start-local-project
https://wiki.dolibarr.org/index.php/Translator_documentation
