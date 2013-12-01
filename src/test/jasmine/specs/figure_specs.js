/**
 *
 * File    :
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/22/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */
describe('Test suite for Figure.', function() {
    'use strict';

    var figureType;
    figureType = window.FigureType;

    describe('Test setter and getter for attributes', function() {

        var figure;

        beforeEach(function () {
            figure = new window.Figure();
        });

        it('set attribute name to Stone and expected Figure Object with attribute name equals Stone.', function () {
            figure.setName(figureType.STONE);
            expect(figure.getName()).toEqual(figureType.STONE);
        });

        it('set attribute won to Scissors and expected Figure Object with attribute won equals Scissors.', function () {
            figure.setWon(figureType.SCISSORS);
            expect(figure.getWon()).toEqual(figureType.SCISSORS);
        });

        it('set attribute lost to Paper and expected Figure Object with attribute won equals Paper.', function () {
            figure.setLost(figureType.PAPER);
            expect(figure.getLost()).toEqual(figureType.PAPER);
        });
    });


    describe('test determination of round result', function() {
        var figureStone, figurePaper, figureScissors;

        figureStone = new window.Figure(figureType.STONE, [figureType.SCISSORS], [figureType.PAPER]);
        figurePaper = new window.Figure(figureType.PAPER, [figureType.STONE], [figureType.SCISSORS]);
        figureScissors = new window.Figure(figureType.SCISSORS, [figureType.PAPER], [figureType.STONE]);

        it('expected Figure Object with name Stone to win when figure opponent has name Scissors.', function () {
            expect(figureStone.determineRoundResult(figureScissors)).toEqual('WON');
        });

        it('expected Figure Object with name Stone to lose when figure opponent has name Paper.', function () {
            expect(figureStone.determineRoundResult(figurePaper)).toEqual('LOST');
        });

        it('expected Figure Object with name Stone to draw when figure opponent has name Stone.', function () {
            expect(figureStone.determineRoundResult(figureStone)).toEqual('DRAW');
        });

        it('expected Figure Object with name Paper to win when figure opponent has name Stone.', function () {
            expect(figurePaper.determineRoundResult(figureStone)).toEqual('WON');
        });

        it('expected Figure Object with name Paper to lose when figure opponent has name Scissors.', function () {
            expect(figurePaper.determineRoundResult(figureScissors)).toEqual('LOST');
        });

        it('expected Figure Object with name Paper to draw when figure opponent has name Paper.', function () {
            expect(figurePaper.determineRoundResult(figurePaper)).toEqual('DRAW');
        });

        it('expected Figure Object with name Scissors to win when figure opponent has name Paper.', function () {
            expect(figureScissors.determineRoundResult(figurePaper)).toEqual('WON');
        });

        it('expected Figure Object with name Scissors to lose when figure opponent has name Stone.', function () {
            expect(figureScissors.determineRoundResult(figureStone)).toEqual('LOST');
        });

        it('expected Figure Object with name Scissors to draw when figure opponent has name Scissors.', function () {
            expect(figureScissors.determineRoundResult(figureScissors)).toEqual('DRAW');
        });

    });
});
