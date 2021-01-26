class Paper {
    constructor(x, y, radius) {
        var options = {
           isStatic: false,
           restitution :0.3,
           friction : 2,
           density :2.2,

        }
        this.body = Matter.Bodies.circle(x, y, radius/1.02, options);
       this.radius = radius; 
       this.paperObject= loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
      }
}