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
    this.food = {
        x : null,
        t : null
    };
}

/**
 * Set canvas size
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
    this.drawBackground();
    this.drawText(this.width/2, this.height/2, "", "", "", "Press space to start new game");
};

/**
 * Draw main window, background and border
 */
Texture.prototype.drawBackground = function() {

    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.strokeStyle = "grey";
    this.ctx.strokeRect(0, 0, this.width, this.height);
};

/**
 * Draw cell
 * @param x
 * @param y
 */
Texture.prototype.drawCell = function(x, y, color) {

    color = color || "#539339";
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x * this.cell, y * this.cell, this.cell, this.cell);
    this.ctx.strokeStyle = "white";
    this.ctx.strokeRect(x * this.cell, y * this.cell, this.cell, this.cell);

};

/**
 * Generate food position
 */
Texture.prototype.generateFood = function() {

    var x = Math.round(Math.random()*(this.width - this.cell) / this.cell);
    var y = Math.round(Math.random()*(this.height - this.cell) / this.cell);

    this.food = { x : x, y : y};

};
/**
 * Draw snake length
 * @param x
 * @param y
 * @param size
 * @param color
 * @param position
 * @param text
 */
Texture.prototype.drawText = function(x, y, size, color, position, text) {
    size = size || "26px GeosansLight";
    color = color || "#539339";
    position = position || "center";

    this.ctx.font = size;
    this.ctx.textAlign = position;
    this.ctx.strokeStyle = color;
    this.ctx.strokeText(text, x, y);
}

/**
 * Get current size
 * @returns {*[]}
 */
Texture.prototype.getSize = function() {
    return [this.width, this.height]
};

