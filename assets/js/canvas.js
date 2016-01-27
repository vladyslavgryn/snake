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
     * Intialize library
     */
    init : function() {

        this.canvas = document.getElementById("canvas");

        this.width = window.screen.availWidth;
        this.height = window.screen.availHeight;

        Canvas.resize();

        /* 2d context */
        var ctx = this.canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(20, 40, 50, 50);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();

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
     * Get current screen size
     * @returns Array
     */
    getSize : function() {
        return [ this.width, this.height ];
    },

    /**
     * Set canvas size
     */
    resize : function() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
}
