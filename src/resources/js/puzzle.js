/**
 * Created with IntelliJ IDEA.
 * User: skoepp
 * Date: 25/11/2013
 * Time: 10:52
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


