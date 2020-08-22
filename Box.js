class Box{
    constructor(x, y, width, height){
        var options = {
            'restitution': 1,
            'friction': 0,
            'density': 0.1,
            }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        
        World.add(world, this.body);
    }
    display(){
        
        if(this.body.speed < 3){

            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            fill("red");
            rect(0,0, this.width, this.height);
            pop();

        }
        else{
            console.log(this.body.speed);
        
            World.remove(world, this.body);
            push();

            //this.visiblity = this.visiblity - 5;
            fill("green");
            rect(this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
        
    }

}