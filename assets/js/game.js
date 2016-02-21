/**
 *
 * Load main resources
 * @author Władysław Hrynczyszyn <vladyslav.gryn@gmail.com>
 * @date 09.02.16
 *
 *
 * Initialization
 * @param width
 * @param height
 * @param canvas
 * @param cell
 * @param Texture
 * @constructor
 */
function Game(width, height, cell, canvas, frame) {

    Texture.apply(this, arguments);
    this.cell = cell;
    this.frame = frame;
}
/**
 *  Extend object Texutre
 */
Game.prototype = Object.create(Texture.prototype);
Game.prototype.constructor = Game;

/**
 * Start game
 */
Game.prototype.start = function() {

    /* get snake position array */
    this.snake = createSnake();

    /* set start position */
    this.x = this.snake[0].x;
    this.y = this.snake[0].y;

    /* default action */
    this.action = 'right';
    this.id = setInterval(this.move.bind(this), this.frame);
};

/**
 * Move snake
 */
Game.prototype.move = function() {

    Texture.prototype.drawBackground.call(this);

    var action = this.getAction();
    switch (action) {
        case "right":
            this.x++;
            break;
        case "left":
            this.x--;
            break;
        case "up":
            this.y--;
            break;
        case "down":
            this.y++;
            break;
    }

    if (this.x === -1 || this.y === -1 || this.x === this.width/this.cell ||  this.y === this.height/this.cell ) {
        clearInterval(this.id);
        return;
    }

    this.snake.pop();
    this.snake.unshift({ x : this.x, y : this.y });

    for (var i = 0; i < this.snake.length; i++) {
        Texture.prototype.drawSnake.call(this, this.snake[i].x, this.snake[i].y);
    }

};

/**
 * Set action
 * @param action
 */
Game.prototype.setAction = function(action) {
    this.action = action;
};

/**
 * Get action
 * @returns {String}
 */
Game.prototype.getAction = function() {
    return this.action;
};

/**
 * Create snake with three cell
 * @returns {Array}
 */
function createSnake() {

    var length = 3;
    var snake = [];

    for ( var i = length - 1; i >= 0; i--) {
        snake.push({x : i, y : 0});
    }

    return snake;
}



