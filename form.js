class form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("car-racing-game");
        title.position(130, 0);
        this.input.position(130,160);
        this.button.position(250, 200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player1.name = this.input.value();
            playercount+= 1;
            player1.index = playercount;
            player1.update();
            player1.updateCount(playercount);
            this.greeting.html("Heyllo" + name);
            this.greeting.position(130, 160);
        });
    }
}