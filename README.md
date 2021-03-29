**NOTICE:** This repo is basically unmaintained. I don't really make extensive use of customizing Firefox and there are security vulnuerabilities in the gulp build system that require upgrading it to to Gulp 4 which I don't really have the interest or time to do right now. I'm leaving this repo open in case anyone has questions and wants to shoot me a message about it. 
# FireFoxHax

![](./assets/images/logo.gif)

This is a [gulp](https://gulpjs.com/) based build process for editing [userChrome.css](https://www.userchrome.org/)
It's uses [scss](https://sass-lang.com/documentation/syntax) to allow for modularity and splitting code into multiple files.

It also uses [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) to pull in other people's projects like [UserChromeTweaks](https://github.com/Timvde/UserChrome-Tweaks).

## TODO:

- [ ] [convert from gulp 3 to gulp 4.](https://www.sitepoint.com/how-to-migrate-to-gulp-4/) (not really a big deal since this isn't meant to go on a server or whatever but would still be nice to get rid of the security alerts.)
