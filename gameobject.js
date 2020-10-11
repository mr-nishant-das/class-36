class gameobject{
    constructor(){}
        getState(){
            var gameStateref = database.ref('gameState');
            gameStateref.on("value", function(data){
                gameState = data.val();
            })
        }
        update(state){
            database.ref('/').update({
                gameState: state
            })
        }
        async start(){
            if(gameState === 0){
                player1 = new player();
                var playercountref = await database.ref('playercount').once("value");
                if(playercountref.exists()){
                    playercount = playercountref.val();
                    player1.getCount();
                }
                form1 = new form();
                form1.display();
            }
        }
        play(){
            form1.hide();
            textSize(30);
            text("Game Start", 120, 100);
            player.getPlayerinfo();
            if(allplayers !== undefined){
                var display_position = 130;
                for(var plrs in allplayers){
                    if(plrs == "player"+player1.index)
                        fill("red");
                        else
                            fill("black");
                            display_position += 20;
                            textSize(15);
                            text(allplayers[plrs].name + ":" + allplayers[plrs].distance, 120, display_position);
                        
                    }
                }
                if(keyIsDown(UP_ARROW) && player1.index !== null){
                    player1.distance += 50;
                    player1.update();
                }
            }
        }