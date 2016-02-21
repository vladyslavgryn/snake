/**
 * Load main resources
 * @author Władysław Hrynczyszyn <vladyslav.gryn@gmail.com>
 * @date 14.02.16
 */

/**
 * Initialization
 * @param width
 * @param height
 * @param cell
 * @param canvas
 * @constructor
 */
function Texture(width, height, cell, canvas) {
    this.width = width;
    this.height = height;
    this.cell = cell;
    this.canvas = canvas;
}

/**
 * Draw
 */
Texture.prototype.init = function() {

    if (this.canvas.getContext) {
        this.ctx = this.canvas.getContext("2d");
    }
    else {
        alert("Canvas unsupported. Please, use normal browser");
        return;
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;
};

/**
 * Draw main window, background and border
 */
Texture.prototype.drawBackground = function() {

    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.strokeStyle = "green";
    this.ctx.strokeRect(0, 0, this.width, this.height);
};

/**
 * Draw snake
 * @param x
 * @param y
 */
Texture.prototype.drawSnake = function(x, y) {

    this.ctx.fillStyle = "green";
    this.ctx.fillRect(x * this.cell, y * this.cell, this.cell, this.cell);
    this.ctx.strokeStyle = "white";
    this.ctx.strokeRect(x * this.cell, y * this.cell, this.cell, this.cell);

};

/**
 * Get current size
 * @returns {*[]}
 */
Texture.prototype.getSize = function() {
    return [this.width, this.height]
};

