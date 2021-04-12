class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, 1000, 480, this.width, this.height);
    }
  };