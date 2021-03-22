class Player{
    constructor(x,y,width,height){
       var options = {
           restitution : 0.2,
           density : 10,
           friction : 1
       }
       this.image2 = loadAnimation("images/running1.png","images/running2.png","images/running3.png","images/running4.png","images/running5.png");
       this.image = loadImage("images/standing.png");
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.x=x;
       this.y=y;
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        push();
        if(keyDown(RIGHT_ARROW)){
           animation(this.image2, pos.x,pos.y,this.width,this.height);
            pos.x=pos.x+1;
       }
        pop();
        }
}