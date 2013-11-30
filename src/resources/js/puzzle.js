/**
 * Created with IntelliJ IDEA.
 * User: skoepp
 * Date: 25/11/2013
 * Time: 10:52
 * To change this template use File | Settings | File Templates.
 */

var puzzle = {};

var gameModel = puzzle.gameModel = function () {
    'use strict';

    var player;

    function resetPlayerResults () {
        player = {
            playerOne : {'Won': 0, 'Draw': 0, 'Lost': 0},
            playerTwo : {'Won': 0, 'Draw': 0, 'Lost': 0}
        };
    }

    resetPlayerResults();

    function getPlayerResults () {
        return player;
    }

    function updateGameResults (resultPlayer1) {

        switch (resultPlayer1) {
        case 'WON':
            ++player.playerOne.Won;
            ++player.playerTwo.Lost;
            break;
        case 'LOST':
            ++player.playerOne.Lost;
            ++player.playerTwo.Won;
            break;
        case 'DRAW':
            ++player.playerOne.Draw;
            ++player.playerTwo.Draw;
            break;
        }
    }

    return {
        getPlayerResults: getPlayerResults,
        updateGameResults: updateGameResults,
        resetPlayerResults: resetPlayerResults
    };
};

var gameView = puzzle.gameView = function () {
    'use strict';

    function resultDisplay (results) {
        var resultsPlayerOne, resultsPlayerTwo;

        resultsPlayerOne = '<span class="label label-success">Won : {Won}</span><br/><span class="label label-default">Draw : {Draw}</span><br/><span class="label label-danger">Lost : {Lost}</span>';
        resultsPlayerTwo = '<span class="label label-success">Won : {Won}</span><br/><span class="label label-default">Draw : {Draw}</span><br/><span class="label label-danger">Lost : {Lost}</span>';

        resultsPlayerOne = resultsPlayerOne.replace(/\{Won\}/g, results.playerOne.Won).replace(/\{Draw\}/g, results.playerOne.Draw).replace(/\{Lost\}/g, results.playerOne.Lost);
        resultsPlayerTwo = resultsPlayerTwo.replace(/\{Won\}/g, results.playerTwo.Won).replace(/\{Draw\}/g, results.playerTwo.Draw).replace(/\{Lost\}/g, results.playerTwo.Lost);

        $('#playerOne-result').html(resultsPlayerOne);
        $('#playerTwo-result').html(resultsPlayerTwo);

    }

    function selectionDisplay (figureTypes) {

        var figure, figureList;

        figureList = '';

        for (figure in figureTypes) {
            if (figureTypes.hasOwnProperty(figure)) {
                figureList += '<button type="button" class="btn btn-default" id="' + figureTypes[figure] + '">' + figureTypes[figure] + '</button>';
            }
        }

        $('#playerOne-selection').html(figureList);
        //$('#playerTwo-selection').html(figureList);
    }

    function updateSelectedValueDisplay (idElement, value) {
        $(idElement).html(value);
    }

    return {
        resultDisplay: resultDisplay,
        selectionDisplay: selectionDisplay,
        updateSelectedValueDisplay: updateSelectedValueDisplay
    };
};

var gameController = puzzle.gameController = function () {
    'use strict';

    var model, playerModus, playerOne, playerSelection, playerTwo, view;

    playerModus = 'PC';
    playerSelection = 'Stone';

    function init () {
        model = new gameModel();
        view = new gameView();
        view.selectionDisplay(FigureType);
        view.updateSelectedValueDisplay('#selectedValuePlayerOne', playerSelection);
    }

    function play () {
        var result;

        if (playerModus === 'PC') {
            playerOne = personSelectFigure();
        } else {
            playerOne = computerSelectFigure();
        }
        console.log(playerOne.getName());


        playerTwo = computerSelectFigure();
        console.log(playerTwo.getName());
        view.updateSelectedValueDisplay('#selectedValuePlayerTwo', playerTwo.getName());

        result = playerOne.determineRoundResult(playerTwo);
        console.log(result);

        model.updateGameResults(result);

        view.resultDisplay(model.getPlayerResults());
    }

    function personSelectFigure () {
        return FigureFactory.createFigure(playerSelection);
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

    function resetModel () {
        model.resetPlayerResults();
        view.resultDisplay(model.getPlayerResults());
    }

    function setPlayerSelection (selectKey) {
        playerSelection = selectKey;
    }

    function setPlayerModus (modeId) {
        playerModus = modeId;
    }

    function getPlayerModus () {
        return playerModus;
    }

    function getView () {
        return view;
    }

    return {
        init: init,
        play: play,
        resetResults: resetModel,
        setPlayerModus: setPlayerModus,
        getPlayerModus: getPlayerModus,
        setPlayerSelection: setPlayerSelection,
        getView: getView
    };
};

$( document ).ready(function() {
    'use strict';

    var game = new gameController();
    game.init();

    $('#startGame').click(function(){
        game.play();
    });

    $('#resetCounter').click(function(){
        game.resetResults();
    });

    $('.playerModus').click(function(){
        if (this.id !== game.getPlayerModus()) {
            game.resetResults();
        }

        game.setPlayerModus(this.id);
    });

    $('#playerOne-selection').children('button').click(function(e) {
        e.stopPropagation();
        game.setPlayerSelection(this.id);
        game.getView().updateSelectedValueDisplay('#selectedValuePlayerOne', this.id);
        game.getView().updateSelectedValueDisplay('#selectedValuePlayerTwo', '');
    });
});


