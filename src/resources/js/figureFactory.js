/**
 * Created with IntelliJ IDEA.
 * User: skoepp
 * Date: 25/11/2013
 * Time: 16:22
 * To change this template use File | Settings | File Templates.
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
