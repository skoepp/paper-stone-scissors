/**
 *
 * File    : game.js
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/30/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */
var Game;
Game = function () {
    'use strict';

    var actualGameResultElement, headlineElement, resultElement, resultModel, selectionDisplayElement, selectionElement, playerMode, playerOne, playerSelection, playerTwo, view;

    playerMode = 'Human';
    playerSelection = '';

    /*
     * Define getter and setter for document nodes
     *
     * actualGameResultElement
     * headlineElement
     * resultElement
     * selectionElement
     * selectionDisplayElement
     */
    function setActualGameResultElement (element) {
        actualGameResultElement = element;
    }

    function getActualGameResultElement () {
        return actualGameResultElement;
    }

    function setHeadlineElement (element) {
        headlineElement = element;
    }

    function getHeadlineElement () {
        return headlineElement;
    }

    function setResultElement (element) {
        resultElement = element;
    }

    function getResultElement () {
        return resultElement;
    }

    function setSelectionElement (element) {
        selectionElement = element;
    }

    function getSelectionElement () {
        return selectionElement;
    }

    function setSelectionDisplayElement (element) {
        selectionDisplayElement = element;
    }

    function getSelectionDisplayElement () {
        return selectionDisplayElement;
    }

    /*
     * Getter and setter for player mode
     *
     * -> Setter includes display updates
     */
    function getPlayerMode () {
        return playerMode;
    }

    function setPlayerMode (modus) {
        playerMode = modus;
        view.setPlayerMode(modus);
        view.actualGameResultDisplay(getActualGameResultElement(), '');
        view.headlineDisplay(getHeadlineElement());
    }

    /*
     * Getter and setter for player selection
     *
     * -> Setter includes display updates
     */
    function getPlayerSelection () {
        return playerSelection;
    }

    function setPlayerSelection (selectKey) {
        playerSelection = selectKey;
        view.actualGameResultDisplay(getActualGameResultElement(), '');
        view.showSelectedDisplay(getSelectionDisplayElement(), selectKey, '');
    }

    /*
     * Method to get figure object by ramdom selection
     */
    function computerSelectFigure () {

        var zz;
        zz = Math.ceil(Math.random() * 3);

        switch(zz){
            case 1:
                return FigureFactory.createFigure(FigureType.STONE);
            case 2:
                return FigureFactory.createFigure(FigureType.PAPER);
            case 3:
                return FigureFactory.createFigure(FigureType.SCISSORS);
        }

        return null;
    }

    /*
     * Method to get figure object by selection of human player
     */
    function personSelectFigure () {
        return FigureFactory.createFigure(playerSelection);
    }

    /*
     * Helper method check if an item is selected
     *
     * shows dialog when no item is selected
     */
    function checkSelectionValue () {
        if (getPlayerSelection() === '') {
            view.noSelectionDisplay();
            return true;
        }

        return false;
    }

    /*
     * Handler for playing a game
     *
     * selects figures for players and determines result
     *
     * updates view elements
     */
    function play () {
        var result;

        if (getPlayerMode() === 'Human') {
            if(checkSelectionValue()) {
                return;
            }
            playerOne = personSelectFigure();
        } else {
            playerOne = computerSelectFigure();
        }

        playerTwo = computerSelectFigure();

        result = playerOne.determineRoundResult(playerTwo);

        resultModel.updatePlayerResults(result);

        view.actualGameResultDisplay(getActualGameResultElement(), result);
        view.resultDisplay(getResultElement(), resultModel.getPlayerResults());
        view.showSelectedDisplay(getSelectionDisplayElement(), playerOne.getName(), playerTwo.getName());
    }

    /*
     * Handler for reset of result
     */
    function resetResults () {
        if (getPlayerMode() === 'Human') {
            setPlayerSelection('');
        }
        resultModel.resetPlayerResults();
        view.actualGameResultDisplay(getActualGameResultElement(), '');
        view.resultDisplay(getResultElement(), resultModel.getPlayerResults());
        view.showSelectedDisplay(getSelectionDisplayElement(), '', '');
    }

    /*
     * init method for game
     *
     * 1. set node elements for display
     * 2. creates and initializes game result model
     * 3. creates game view object and setup view
     */
    function init (actualGameResult, headlineElement, resultElement, selectionElement, selectionDisplayElement) {

        setActualGameResultElement(actualGameResult);
        setHeadlineElement(headlineElement);
        setResultElement(resultElement);
        setSelectionElement(selectionElement);
        setSelectionDisplayElement(selectionDisplayElement);

        resultModel = new GameResultModel();
        resultModel.init();

        view = new GameDisplays();
        view.init(playerMode);
        view.headlineDisplay(getHeadlineElement());
        view.resultDisplay(getResultElement(), resultModel.getPlayerResults());
        view.showSelectedDisplay(getSelectionDisplayElement(), '', '');
        view.selectionDisplay(FigureType, getSelectionElement());
    }

    return {
        init: init,
        play: play,
        resetResults: resetResults,
        getPlayerMode: getPlayerMode,
        setPlayerMode: setPlayerMode,
        getPlayerSelection: getPlayerSelection,
        setPlayerSelection: setPlayerSelection
    };
};
