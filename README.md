# pongroids-online
###### v0.0.2
An online 2 player game that combines 2 classic arcade games (Astroids and Pong) into a single game with it's own rules, graphics, and ideas. This version is currently in the earliest stages of development as I develop and test out both dependencies and developer dependencies that will be useful in future versions.  None of the actual game components are going to be implementend until v0.1.0.

### About this repo
The idea for this game came from a school project I programmed in processing and built custom controllers using a single Arduino.  It ran off of a single desktop computer and had 2 controllers that required both players to be in the same room.  Since graduating, I wanted to create the same idea but reach a larger audience.  I've decided to reprogram the entire game using JavaScript, so players can connect and play against eachother through the internet.

## Requirements
This project requires a few things that you will need to install onto your local machine.  Please refer to their documentation for how to get them working on your machine.

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [NodeJS](https://nodejs.org/en/download/)
* [SASS](http://sass-lang.com/install)

## Dependencies
After you have the requirements above installed, use git to clone this repo into the folder of your choice.

```shell
git clone https://github.com/typicalmike002/pongroids-online.git
```

Then, install all the dependencies and devDependencies inside the project's package.json file using the following npm command.

```shell
npm install
```

Now that everything is installed, you can start the server with the following.

```shell
npm start
```

If there are no errors, your server should be running on port 3000 by default.

## Developer Dependencies
This project uses the [webpack](https://webpack.github.io) module bundler which is completely controlled by npm in the package.json file.  Using [nodemon](https://github.com/remy/nodemon), node will watch for changes inside the folders specified inside package.json scripts section and execute webpack's configuration file.  The unique thing about this build is it runs this configuration file automatically twice each time a change is detected.  This was done on purpose so webpack can save both a regular and a minified version of the files.