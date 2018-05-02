const config = {
    type: Phaser.AUTO, //this is the rendering context, auto tries to use WebGL fallback is canvas
    width: 800, //game resolution
    height: 600,//game resolution
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }, 
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

//initialize variables//

let player;
let starfield;

//gaming functions//

function preload(){
    this.load.image('starfield', './assets/starfield.png');
    this.load.image('spaceship', './assets/player.png');
}

function create(){
    //scrolling background//
    this.add.image(0, 0, 800, 600, 'starfield');
    //the hero//
    // player = game.add.sprite(400, 500, 'spaceship');
    // player.anchor.setTo(0.5, 0.5);
}

function update(){
    //Scroll the background//
    // starfield.tilePosition.y =+ 2;
}
function render(){

}