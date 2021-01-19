class Drops{

    constructor(x, y){

        var options = {

            restitution : 0.1,
            friction : 0.001,
            
        }

        // Creating a body
        this.rain = Bodies.circle(x, y, 3, options);

        // Setting the radius as a property
        this.radius = 3;

        this.x = x;
        this.y = y;

        // Adding the drop to the world
        World.add(world, this.rain);
    }
    
    updateY(){
        
        if (this.rain.position.y > 700){

            Matter.Body.setPosition(this.rain, {x : random(0, 600), y : random(0, 300)});
            Matter.Body.setVelocity(this.rain, {x : 0, y : 2});
        }
    }
    
    
    display(){

        var pos = this.rain.position;

        // Matter.Body.setVelocity(this.rain, 50);

        push();
        translate(pos.x, pos.y);
        rotate(this.rain.angle);

        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius)

        pop();
    }
}

