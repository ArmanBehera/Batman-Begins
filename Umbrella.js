class Umbrella{

    constructor(x, y ){

        // Creating a circular body for the umbrella
        this.body = Bodies.circle(x, y - 35, 80, {isStatic : true});

        // Setting the radius as a propert 
        this.radius = 80;

        // Assigning an image to this.image
        this.image = loadImage("ManWithUmbrella.png");

        // Adding the body to the world
        World.add(world, this.body);
    }

    display(){

        // Displaying the image
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y + 35, 400, 300);
    }
}