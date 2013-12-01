/**
 *
 * File    : figureFactory.js
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/30/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */

/**
 * Figure factory
 *
 * return:  Firgure object for selected figure type
 */
var FigureFactory = {

    createFigure: function (figureTyp) {
        'use strict';

        switch (figureTyp) {
            case FigureType.STONE:
                return new Figure(FigureType.STONE, [FigureType.SCISSORS], [FigureType.PAPER]);
            case FigureType.PAPER:
                return new Figure(FigureType.PAPER, [FigureType.STONE], [FigureType.SCISSORS]);
            case FigureType.SCISSORS:
                return new Figure(FigureType.SCISSORS, [FigureType.PAPER], [FigureType.STONE]);
            default:
                return null;
        }
    }
};
