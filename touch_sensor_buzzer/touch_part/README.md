Intel® XDK IoT Node.js\* Touch Notifier App
===========================================

See [LICENSE.md](LICENSE.md) for license terms and conditions.

This sample application is distributed as part of the
[Intel® XDK](http://xdk.intel.com). It can also be downloaded
or cloned directly from its git repo on the
[public Intel XDK GitHub\* site](https://github.com/gomobile).

For help getting started developing applications with the
Intel XDK, please start with
[the Intel XDK documentation](https://software.intel.com/en-us/xdk/docs).

See also, the
[mraa library documentation](https://iotdk.intel.com/docs/master/mraa/index.html)
for details regarding supported boards and the mraa library API and the
[upm library documentation](https://iotdk.intel.com/docs/master/upm/) for
information regarding the upm sensor and actuator library APIs.

App Overview
------------

Demonstrates reading digital data from the touch sensor in a
[Grover Starter Kit Plus](https://www.seeedstudio.com/
Grove-Starter-Kit-Plus-IoT-Edison-p-2634.html) (or equivalent) I/O kit.
The app starts a web server on the IoT device that can then be used for
communication via a [WebSocket](https://www.websocket.org/) interface.

This IoT app works in conjunction with a mobile companion app also named
"Touch Notifier." The corresponding mobile app project can be found in the
"Samples and Demos" section of the "HTML5 Companion App" section of the "Start
a New Project" page (located on the Projects tab). See that app for additional
details.

Important App Files
-------------------

* main.js
* package.json

Important Project Files
-----------------------

* README.md
* LICENSE.md
* \<project-name\>.xdk

Tested IoT Node.js Platforms
----------------------------

* [Intel® Galileo Board for Arduino](http://intel.com/galileo)
* [Intel® Edison Board for Arduino](http://intel.com/edison)

This sample can run on other IoT [Node.js](http://nodejs.org) development
platforms, that include the appropriate sensor hardware, but may require
changes to the I/O initialization and configuration code in order to work on
those other platforms.
