/**
 *
 * File    :
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/30/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */
var GameResultModel = function () {
    'use strict';

    var playerResults;

    function init () {
        playerResults = initPlayerResults();
    }

    function initPlayerResults () {
        return {
            playerOne : {'Won': 0, 'Draw': 0, 'Lost': 0},
            playerTwo : {'Won': 0, 'Draw': 0, 'Lost': 0}
        };
    }

    function getPlayerResults () {
        return playerResults;
    }

    function updatePlayerResults (resultPlayer1) {

        switch (resultPlayer1) {
            case 'WON':
                ++playerResults.playerOne.Won;
                ++playerResults.playerTwo.Lost;
                break;
            case 'LOST':
                ++playerResults.playerOne.Lost;
                ++playerResults.playerTwo.Won;
                break;
            case 'DRAW':
                ++playerResults.playerOne.Draw;
                ++playerResults.playerTwo.Draw;
                break;
        }
    }

    return {
        init: init,
        getPlayerResults: getPlayerResults,
        updatePlayerResults: updatePlayerResults,
        resetPlayerResults: init
    };
};
