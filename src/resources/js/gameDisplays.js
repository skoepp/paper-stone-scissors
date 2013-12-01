/**
 *
 * File    : gameDisplays.js
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/30/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */
var GameDisplays;
GameDisplays = function () {
    'use strict';

    var playerMode;

    /*
     * Setter for player mode
     */
    function setPlayerMode (mode) {
        playerMode = mode;
    }

    /*
     * initialze the game display object
     *
     * @param playerMode
     */
    function init (playerMode) {
        setPlayerMode(playerMode);
    }

    /*
     * Display method to show the actual reset set for both players.
     *
     * @param element : node element
     * @param results : result String
     */
    function actualGameResultDisplay (element, result) {
        var person;

        if (playerMode === 'Human') {
            person = 'You';
        } else {
            person = 'Computer 1';
        }

        switch (result) {
            case 'WON' :
                element.html('<div>' + person + ' Won</div>');
                break;
            case 'LOST' :
                element.html('<div>' + person + ' Lost</div>');
                break;
            case 'DRAW' :
                element.html('<div>This was a draw</div>');
                break;
            default :
                element.html('<div>&nbsp;</div>');
                break;
        }
    }

    /*
     * Display method for the headline display.
     * Show the players identification.
     *
     * @param element : node element
     */
    function headlineDisplay (element) {

        if (playerMode === 'Human') {
            element.html('<div>You</div><div>Computer</div>');
        } else {
            element.html('<div>Computer 1</div><div>Computer 2</div>');
        }
    }

    /*
     * Display method to show the actual reset set for both players.
     *
     * @param element : node element
     * @param results : result model Object
     */
    function resultDisplay (element, results) {

        var template, output;

        template = '<div><span class="won">Won : {Won}</span><br/><span class="draw">Draw : {Draw}</span><br/><span class="lost">Lost : {Lost}</span></div>';
        output = template.replace(/\{Won\}/g, results.playerOne.Won).replace(/\{Draw\}/g, results.playerOne.Draw).replace(/\{Lost\}/g, results.playerOne.Lost);
        output += template.replace(/\{Won\}/g, results.playerTwo.Won).replace(/\{Draw\}/g, results.playerTwo.Draw).replace(/\{Lost\}/g, results.playerTwo.Lost);

        element.html(output);
    }

    /*
     * Display method to show the selected item for both players.
     *
     * @param element : node element
     * @param valuePlayerOne : Selected item string
     * @param valuePlayerTwo : Selected item string
     */
    function showSelectedDisplay (element, valuePlayerOne, valuePlayerTwo) {

        var template, output;

        template ='<div class="title">Seleted items :</div><div class="selections"><span>{playerOne}</span><span>{playerTwo}</span></div>';
        output = template.replace(/\{playerOne\}/g, valuePlayerOne).replace(/\{playerTwo\}/g, valuePlayerTwo);

        element.html(output);
    }

    /*
     * Display an information dialog for no item selection
     */
    function noSelectionDisplay () {
        alert('Please select a item.');
    }

    /*
     * Method to create buttons with figure types
     *
     * @param figureTypes : figure types object (Enum)
     */
    function createSelectionButtons (figureTypes) {

        var figure, out;

        out = '';

        for (figure in figureTypes) {
            if (figureTypes.hasOwnProperty(figure)) {
                out += '<button type="button" id="' + figureTypes[figure] + '">' + figureTypes[figure] + '</button>';
            }
        }

        return out;
    }

    /*
     * Display method to show the selection buttons with item names.
     *
     * @param figureTypes : figure types object (Enum)
     * @param element : node element
     */
    function selectionDisplay (figureTypes, element) {

        var figureList;

        figureList = '';

        if (playerMode === 'Human') {
            figureList += createSelectionButtons(figureTypes);
        } else {
            figureList = '&nbsp;';
        }

        element.html(figureList);
    }

    return {
        init: init,
        setPlayerMode: setPlayerMode,
        actualGameResultDisplay: actualGameResultDisplay,
        headlineDisplay: headlineDisplay,
        resultDisplay: resultDisplay,
        noSelectionDisplay: noSelectionDisplay,
        selectionDisplay: selectionDisplay,
        showSelectedDisplay: showSelectedDisplay
    };
};
