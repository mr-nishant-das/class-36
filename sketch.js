var canvas, bgimg;
var gameState = 0;
var playercount;
var database;
var form1, player1, game1;
var allplayers;

function setup(){
    createCanvas(400, 400);
    
    database = firebase.database();
    game1 =  new gameobject();
    game1.getState();
    game1.start();
}

function draw(){
    if(playercount == 4){
        game1.update(1);
    }
    if(gameState == 1){
        clear();
        game1.play();
    }
}