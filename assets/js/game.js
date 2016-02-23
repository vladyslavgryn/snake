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
    this.snake = [];
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

    this.gameOver = false;

    /* get snake position array */
    this.snake = createSnake();

    /* set default snake action */
    this.action = 'right';

    /* set snake start position */
    this.x = this.snake[0].x;
    this.y = this.snake[0].y;

    Texture.prototype.generateFood.call(this);

    this.id = setInterval(this.move.bind(this), this.frame);
};

/**
 * Move snake
 */
Game.prototype.move = function() {

    Texture.prototype.drawBackground.call(this);

    this.snakeAction();

    if (this.x === -1 || this.y === -1 || this.x === this.width/this.cell ||  this.y === this.height/this.cell || this.collision()) {
        clearInterval(this.id);
        this.gameOver = true;
        return;
    }

    /* check if snake eat food */
    if (this.food.x == this.x && this.food.y == this.y ) {
        Texture.prototype.generateFood.call(this);
    }
    else {
        this.snake.pop();
    }
    /* add new cell */
    this.snake.unshift({ x : this.x, y : this.y });

    /* draw snake */
    for (var i = 0; i < this.snake.length; i++) {
        Texture.prototype.drawCell.call(this, this.snake[i].x, this.snake[i].y);
    }
    /* draw food */
    Texture.prototype.drawCell.call(this, this.food.x , this.food.y);
};

/**
 * Event listener
 */
Game.prototype.snakeAction = function() {

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
};

/**
 * Check collision
 * @returns {boolean}
 */
Game.prototype.collision = function() {

    for (var i = 0; i < this.snake.length; i++) {
        if (this.snake[i].x === this.x && this.snake[i].y === this.y) {
            return true;
        }
    }
    return false;
}

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



