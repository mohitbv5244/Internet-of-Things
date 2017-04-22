/*
 * Drive the Grove RGB LCD (a JHD1313m1).
 *
 * This can be done using one of two methods:
 *
 * Use the UPM library, which contains direct support for the LCD device.
 *
 * Alternatively, drive the LCD directly from JavaScript using the I2C
 * interface directly. This approach is useful for learning about using the
 * I2C bus. The LCD file is an implementation in JavaScript for some common
 * LCD functions.
 *
 * Supported Intel IoT development boards are identified in the code.
 *
 * See LICENSE.md for license terms and conditions.
 *
 * https://software.intel.com/en-us/xdk/docs/using-templates-nodejs-iot
 */

/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;


// change this to false to use the hand rolled version
var useUpmVersion = true;

// we want mraa to be at least version 0.6.1
var mraa = require('mraa');
var version = mraa.getVersion();

if (version >= 'v0.6.1') {
    console.log('mraa version (' + version + ') ok');
}
else {
    console.log('meaa version(' + version + ') is old - this code may not work');
}

if (useUpmVersion) {
    useUpm();
}
else {
    useLcd();
}

/**
 * Rotate through a color pallette and display the
 * color of the background as text
 */
function rotateColors(display) {
    var red = 0;
    var green = 0;
    var blue = 0;
    display.setColor(red, green, blue);
    setInterval(function() {
        blue += 64;
        if (blue > 255) {
            blue = 0;
            green += 64;
            if (green > 255) {
                green = 0;
                red += 64;
                if (red > 255) {
                    red = 0;
                }
            }
        }
        display.setColor(red, green, blue);
        display.setCursor(0,0);
        display.write('red=' + red + ' grn=' + green + '  ');
        display.setCursor(1,0);
        display.write('blue=' + blue + '   ');  // extra padding clears out previous text
    }, 1000);
}

/**
 * Use the upm library to drive the two line display
 *
 * Note that this does not use the "lcd.js" code at all
 */
function useUpm() {
    var lcd = require('jsupm_i2clcd');
    var display = new lcd.Jhd1313m1(0, 0x3E, 0x62);
    display.setCursor(1, 1);
    display.write('hi there');
    display.setCursor(0,0);
    display.write('more text');
    rotateColors(display);
}

/**
 * Use the hand rolled lcd.js code to do the
 * same thing as the previous code without the
 * upm library
 */
function useLcd() {
    var lcd = require('./lcd');
    var display = new lcd.LCD(0);

    display.setColor(0, 60, 255);
    display.setCursor(1, 1);
    display.write('hi there');
    display.setCursor(0,0);
    display.write('more text');
    display.waitForQuiescent()
    .then(function() {
        rotateColors(display);
    })
    .fail(function(err) {
        console.log(err);
        display.clearError();
        rotateColors(display);
    });
}
