/**
 *
 * File    :
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/30/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */
describe('Test suite for GameResultModel.', function() {
    'use strict';

    var gameModel, results;

    beforeEach(function () {
        gameModel = new window.GameResultModel();
        gameModel.init();
    });

    it('expected game result model with result zero for win, lost and draw for player1 and player 2', function () {

        results = gameModel.getPlayerResults();

        expect(results.playerOne.Won).toEqual(0);
        expect(results.playerOne.Lost).toEqual(0);
        expect(results.playerOne.Draw).toEqual(0);
        expect(results.playerTwo.Won).toEqual(0);
        expect(results.playerTwo.Lost).toEqual(0);
        expect(results.playerTwo.Draw).toEqual(0);
    });

    it('expected game result model with result win = 1 for player 1 and lost = 1 for player 2 when player 1 wins', function () {

        gameModel.updatePlayerResults('WON');
        results = gameModel.getPlayerResults();

        expect(results.playerOne.Won).toEqual(1);
        expect(results.playerOne.Lost).toEqual(0);
        expect(results.playerOne.Draw).toEqual(0);
        expect(results.playerTwo.Won).toEqual(0);
        expect(results.playerTwo.Lost).toEqual(1);
        expect(results.playerTwo.Draw).toEqual(0);
    });

    it('expected game result model with result draw = 1 for player 1 and draw = 1 for player 2 when player 1 draws', function () {

        gameModel.updatePlayerResults('DRAW');
        results = gameModel.getPlayerResults();

        expect(results.playerOne.Won).toEqual(0);
        expect(results.playerOne.Lost).toEqual(0);
        expect(results.playerOne.Draw).toEqual(1);
        expect(results.playerTwo.Won).toEqual(0);
        expect(results.playerTwo.Lost).toEqual(0);
        expect(results.playerTwo.Draw).toEqual(1);
    });

    it('expected game model with result lost = 1 for player 1 and win = 1 for player 2 when player 1 lost', function () {

        gameModel.updatePlayerResults('LOST');
        results = gameModel.getPlayerResults();

        expect(results.playerOne.Won).toEqual(0);
        expect(results.playerOne.Lost).toEqual(1);
        expect(results.playerOne.Draw).toEqual(0);
        expect(results.playerTwo.Won).toEqual(1);
        expect(results.playerTwo.Lost).toEqual(0);
        expect(results.playerTwo.Draw).toEqual(0);
    });

});
