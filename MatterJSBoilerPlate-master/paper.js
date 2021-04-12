  class Paper {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      
      this.radius = 70;
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      translate(pos.x, pos.y);
      image(this.image,0,0,this.radius,this.radius);
      pop();
    }
  };