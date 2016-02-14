/**
 * Load main resources
 * @author Władysław Hrynczyszyn <vladyslav.gryn@gmail.com>
 * @date 14.02.16
 */

/**
 * Initialization
 * @param width
 * @param height
 * @param canvas
 * @constructor
 */
function Texture(width, height, canvas) {
    this.width = width;
    this.height = height;
    this.canvas = canvas;
}
/**
 * Get current size
 * @returns {*[]}
 */
Texture.prototype.getSize = function() {
    return [this.width, this.height]
};

/**
 * Draw main window
 */
Texture.prototype.draw = function() {

    var ctx = null;

    if (this.canvas.getContext) {
        ctx = this.canvas.getContext("2d");
    }
    else {
        alert("Canvas unsupported. Please, use normal browser");
        return;
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    drawBackground(ctx, this.width, this.height);

}

/**
 * Draw background and border
 * @param ctx
 * @param x
 * @param y
 */
function drawBackground(ctx, x, y) {

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, x, y);
    ctx.strokeStyle = "green";
    ctx.strokeRect(0, 0, x, y);
}
