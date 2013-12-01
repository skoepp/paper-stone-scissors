/**
 *
 * File    :
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/30/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */
var Game = function () {
    'use strict';

    var actualGameResultElement, headlineElement, resultElement, resultModel, selectionDisplayElement, selectionElement, playerMode, playerOne, playerSelection, playerTwo, view;

    playerMode = 'Human';
    playerSelection = '';

    function init (actualGameResult, headlineElement, resultElement, selectionElement, selectionDisplayElement) {

        setActualGameResultElement(actualGameResult);
        setHeadlineElement(headlineElement);
        setResultElement(resultElement);
        setSelectionElement(selectionElement);
        setSelectionDisplayElement(selectionDisplayElement);

        resultModel = new GameResultModel();
        resultModel.init();

        view = new GameView();
        view.init(playerMode);
        view.headlineDisplay(getHeadlineElement());
        view.resultDisplay(getResultElement(), resultModel.getPlayerResults());
        view.showSelectedDisplay(getSelectionDisplayElement(), '', '');
        view.selectionDisplay(FigureType, getSelectionElement());
    }

    function setActualGameResultElement (element) {
        actualGameResultElement = element;
    }

    function getActualGameResultElement (element) {
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

    function getSelectionDisplayElement (element) {
        return selectionDisplayElement;
    }

    function getPlayerMode () {
        return playerMode;
    }

    function setPlayerMode (modus) {
        playerMode = modus;
        view.setPlayerMode(modus);
        view.actualGameResultDisplay(getActualGameResultElement(), '');
        view.headlineDisplay(getHeadlineElement());
    }

    function resetResults () {
        if (getPlayerMode() === 'Human') {
            setPlayerSelection('');
        }
        resultModel.resetPlayerResults();
        view.actualGameResultDisplay(getActualGameResultElement(), '');
        view.resultDisplay(getResultElement(), resultModel.getPlayerResults());
        view.showSelectedDisplay(getSelectionDisplayElement(), '', '');
    }

    function setPlayerSelection (selectKey) {
        playerSelection = selectKey;
        view.actualGameResultDisplay(getActualGameResultElement(), '');
        view.showSelectedDisplay(getSelectionDisplayElement(), selectKey, '');
    }

    function getPlayerSelection () {
        return playerSelection;
    }

    function checkSelectionValue () {
        if (getPlayerSelection() === '') {
            view.displayNoSelection();
            return true;
        }

        return false;
    }

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

    function personSelectFigure () {
        return FigureFactory.createFigure(playerSelection);
    }

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

    return {
        init: init,
        play: play,
        resetResults: resetResults,
        setPlayerMode: setPlayerMode,
        setPlayerSelection: setPlayerSelection
    };
};
