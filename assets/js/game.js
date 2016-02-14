/**
 * /**
 * Load main resources
 * @author Władysław Hrynczyszyn <vladyslav.gryn@gmail.com>
 * @date 09.02.16
 */

/**
 * Initialization
 * @param width
 * @param height
 * @param canvas
 * @param cell
 * @param Texture
 * @constructor
 */
function Game(width, height, canvas, cell) {

    Texture.call(this, width, height, canvas);
    this.cell = cell;
}
/* Extend object Texutre */
Game.prototype = Object.create(Texture.prototype);
Game.prototype.constructor = Game;

/**
 * Get snake cell size
 * @returns Numer
 */
Game.prototype.getCell = function() {
    return this.cell;
};



