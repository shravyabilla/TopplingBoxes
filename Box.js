class Box{
    constructor(x, y, width, height){

        var options={
            restitution:0.08
        }

        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push(); //save the settings
        fill(255);
        translate(pos.x,pos.y); // origin of point
        rotate(angle); //rotates using the angle mentioned
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop(); //restore the settings
    }

}