/**
 *
 * File    : figure.js
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/30/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */

/**
 *
 * Figure object
 *
 * @param figureTypeName
 * @param figureTypeWon
 * @param figureTypeLost
 */
var Figure = function (figureTypeName, figureTypeWon, figureTypeLost) {

    'use strict';

    var lost, name, won;

    name = figureTypeName;
    won = figureTypeWon;
    lost = figureTypeLost;

    function _determineRoundResult (figureOpponent){

        var typeWon, typeLost;

        typeWon = Object.prototype.toString.call(won);
        typeLost = Object.prototype.toString.call(lost);

        if (typeWon === '[object Array]' && typeLost === '[object Array]') {

            if (won.contains(figureOpponent.getName())) {
                return 'WON';
            } else if (lost.contains(figureOpponent.getName())) {
                return 'LOST';
            }

            return 'DRAW';
        }

        return null;
    }

    function _getName () {
        return name;
    }

    function _getWon () {
        return won;
    }

    function _getLost () {
        return lost;
    }

    function _setName (Name) {
        name = Name;
    }

    function _setWon (Won) {
        won = Won;
    }

    function _setLost (Lost) {
        lost = Lost;
    }

    return {
        determineRoundResult : _determineRoundResult,
        getName : _getName,
        getWon : _getWon,
        getLost : _getLost,
        setName : _setName,
        setWon : _setWon,
        setLost : _setLost
    };
};
