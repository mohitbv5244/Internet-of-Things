Intel® XDK IoT Node.js\* LCD Demo App
=====================================

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

This example drives a JHD1313m1 LCD as found in the Grove Starter
Kit. This connects to an I2C buss.

The code can be used in either of two ways. By default, it will
use the UPM module. This is much the simpler way to drive a UPM
supported device.

By commenting out the call to the UPM code and uncommenting the
useLcd call, you can also drive the device directly using the lcd
module. The purpose of this is to demonstrate driving the I2C
buss directly from Javascript. Notice that we need delays between
some of the bus transactions. There is no direct equivalent to
"wait" in Javascript. Instead we have to set up a callback on a
timer. So lcd.js creates a queue driven execution engine for
I2C devices.

The advantage of this is that you can do other things while
waiting for the buss to respond. For some applications this may
be important but for most, the blocking waits used by UPM will
not cause problems.

Important App Files
-------------------

* main.js
* lcd.js
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
