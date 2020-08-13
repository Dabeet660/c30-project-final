class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.tintfunc = 255
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed < 3){
            var pos = this.body.position;
            rectMode(CENTER);
            push();
            fill(146, 249, 2);
            strokeWeight(5);
            rect(pos.x,pos.y,this.width,this.height);
            pop();    
           
        } else { 
            World.remove(world,this.body);
            push();
            this.tintfunc = this.tintfunc - 5;
            tint(255,this.tintfunc);
            rect(tpos.x,pos.y,this.width,this.height);
            pop();
        }
       
    }
}