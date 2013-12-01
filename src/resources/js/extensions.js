/**
 * Created with IntelliJ IDEA.
 * User: skoepp
 * Date: 25/11/2013
 * Time: 16:19
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
