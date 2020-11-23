class Box{
    constructor(x, y, width, height){
        var option = {
            restitution : 0.8
        }            
        this.box = Bodies.rectangle(x, y, width, height, option);
        World.add(world,this.box);
        this.width = width;
        this.height = height;
        
    }

    display(){
        var angle = this.box.angle
        push();
        translate(this.box.position.x, this.box.position.y)
        rotate(angle);
        rectMode(CENTER);
        rect(0 , 0 , this.width , this.height);
        pop();  
    }
}