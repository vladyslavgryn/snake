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
    this.drawText("Press space to start new game", this.width/2, this.height/2);
};

/**
 * Draw main window, background and border
 */
Texture.prototype.drawBackground = function() {

    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.strokeStyle = "#76bf5a";
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
 * @param length
 */
Texture.prototype.drawText = function(text, x, y, size, color) {
    size = size || "15px Comic Sans MS";
    color = color || "#539339";

    this.ctx.font = size;
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y);
}

/**
 * Get current size
 * @returns {*[]}
 */
Texture.prototype.getSize = function() {
    return [this.width, this.height]
};

