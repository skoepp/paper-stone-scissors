**Paper stone scissors project**
=======================

The project was developt with IntelliJ IDEA. During the development a Grunt configuration was used that runs jsHint and Karma with jasmine tests for the files. A test coverage report is created locally on your machine in the folder coverage by Istanbul.

**Setup develoment environment:**
=================================

Start the project by installing nodeJs and Grunt-cli on you development machine.

Go to project folder and Install node modules:

    npm install

You could start the watcher with:

    grunt watch

You could start a coverage report with:

    grunt karam-t or grunt karma-w

To create the distribution files Grunt is also used:

    grunt dist

**Build project:**
==================

You can build the project with maven. Keep in mind that you first must run the grunt dist statement.
During the maven build the jasmine tests are executed.

**Next steps:**
==================

 1. Implement images for the items
 2. Extend game with Spock and lizard
 3. Create template class
 4. Include grunt build in maven
