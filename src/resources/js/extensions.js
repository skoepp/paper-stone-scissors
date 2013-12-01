/**
 *
 * File    : extension.js
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/30/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */

/**
 * Extend Array prototype with method to detect excistence of value in array
 * @param k
 * @returns {boolean}
 */
Array.prototype.contains = function (k) {
    'use strict';

    var p;

    for (p in this) {
        if (this.hasOwnProperty(p) && this[p] === k) {
            return true;
        }
    }

    return false;
};
