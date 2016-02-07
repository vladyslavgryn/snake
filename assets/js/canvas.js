/**
 * Load main resources
 * @author Władysław Hrynczyszyn <vladyslav.gryn@gmail.com>
 * @date 27.01.2016
 */

var Canvas = {

    /**
     * @type Object
     */
    canvas : null,

    /**
     * @type Number
     */
    width : null,

    /**
     * @type Number
     */
    height : null,

    /**
     * @type Number
     */
    frame : null,

    /**
     * @type Number
     */
    cell : null,

    /**
     * @type Array
     */
    snake : null,

    /**
     * @type Object
     */
    ctx : null,

    /**
     * @type Number
     */
    x : null,

    /**
     * @type Number
     */
    y : null,

    /**
     * Initialized library
     */
    init : function() {

        this.canvas = document.getElementById("canvas");

        this.width = window.screen.availWidth - 20;
        this.height = window.screen.availHeight - 100;

        /* set canvas size */
        Canvas.resize();
        /* set frame per second */
        Canvas.setFrame(500);
        /* set cell size */
        Canvas.setCell(10);

        /* 2d context */
        if (this.canvas.getContext) {
            this.ctx = this.canvas.getContext("2d");
        }
        else {
            alert("Canvas unsupported. Please, use normal browser");
            return;
        }
        /* draw background */
        drawBackground(this.ctx,this.width,this.height);
        /* create snake array */
        this.snake = createSnake();
        this.x = this.snake[0].x;
        this.y = this.snake[0].y;

        setInterval(Canvas.draw, Canvas.getFrame());

    },

    /**
     * Draw snake per frame
     */
    draw : function() {

        drawBackground(Canvas.ctx,Canvas.width,Canvas.height);
        Canvas.x++;
        Canvas.snake.pop();
        Canvas.snake.unshift({ x : Canvas.x, y : Canvas.y });

        for (var i = 0; i < Canvas.snake.length; i++) {
            drawSnake(Canvas.ctx, Canvas.snake[i].x, Canvas.snake[i].y, Canvas.getCell());
        }
    },

    /**
     * Set canvas size
     */
    resize : function() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    /**
     * Set size
     * @param width
     * @param height
     */
    setSize : function(width, height) {
        this.width = width;
        this.height = height;
    },

    /**
     * Set frame per second
     * @param frame
     */
    setFrame : function(frame) {
        this.frame = parseInt(frame);
    },

    /**
     * Set cell size
     * @param frame
     */
    setCell : function(cell) {
        this.cell = parseInt(cell);
    },

    /**
     * Get current screen size
     * @returns Array
     */
    getSize : function() {
        return [ this.width, this.height ];
    },

    /**
     * Get current frame
     * @returns {Number}
     */
    getFrame : function() {
        return this.frame;
    },

    /**
     * Get cell size
     * @returns {Number}
     */
    getCell : function() {
        return this.cell;
    }
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

/**
 * Draw snake cell
 * @param ctx
 * @param x
 * @param y
 */
function drawSnake(ctx,x,y,cellSize) {

    ctx.fillStyle = "green";
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
}

/**
 * Draw main background
 * @param ctx
 * @param x
 * @param y
 */
function drawBackground(ctx,x,y) {

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, x, y);
    ctx.strokeStyle = "green";
    ctx.strokeRect(0, 0, x, y);
}
