/**
 *
 * File    : puzzle.js
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/30/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */

$( document ).ready(function() {
    'use strict';

    var game, view;
    game = new Game();
    game.init($('#actual-game-result'), $('#headline'), $('#results'), $('#selection'), $('#selection-display'));

    $('#startGame').click(function(){
        game.play();
    });

    $('#resetCounter').click(function(){
        game.resetResults();
    });

    $('.playerModus').click(function(){
        if (this.id !== game.getPlayerMode()) {
            game.setPlayerMode(this.id);
            game.resetResults();
        }

        if (this.id === 'Human') {
            $('#selection').show();
        } else {
            $('#selection').hide();
        }
    });

    $('#selection').children('button').click(function(e) {
        e.stopPropagation();
        game.setPlayerSelection(this.id);
    });

});


