/**
 *
 * File    :
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/22/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */
describe('Test suite for FigureFactory.', function() {
    'use strict';

    var figure, figureFactory, figureType;
    figureType = window.FigureType;
    figureFactory = window.FigureFactory;

    it('should create Figure Object with name Stone.', function () {
        figure = figureFactory.createFigure(figureType.STONE);
        expect(figure.getName()).toEqual(figureType.STONE);
    });

    it('should create Figure Object with name Paper.', function () {
        figure = figureFactory.createFigure(figureType.PAPER);
        expect(figure.getName()).toEqual(figureType.PAPER);
    });

    it('should create Figure Object with name Scissors.', function () {
        figure = figureFactory.createFigure(figureType.SCISSORS);
        expect(figure.getName()).toEqual(figureType.SCISSORS);
    });

    it('should return null when no argument is given.', function () {
        figure = figureFactory.createFigure();
        expect(figure).toBeNull();

    });
});
