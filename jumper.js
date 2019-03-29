
  function jumper() {
    this.x = 50;
    this.y = 0;
    this.gravity = 0.5; //forces of the gravity
    this.lift = -15; //opposing the force of gravity
    this.velocity = 0;
    
    this.show = function() {
      fill(color('red'));
      ellipse(this.x,this.y,50,50);
    };
    
    this.up = function() {
      this.velocity += this.lift;//jumping function
    };
    
    this.move = function() {
      if (keyIsDown(37)) {
      this.x -= 10;
    }
    if (keyIsDown(39)) {
      this.x += 10;
    }
    };
    this.updata = function() {
      this.velocity += this.gravity;//Gravity applied when not jumping
      this.y += this.velocity;
      this.velocity += 0.8;// Air resistance
      if (this.y > h) {
        this.y = h;
        this.velocity = 0;
      }
      if (this.y < 0) { //jumper hits the celling
        this.y = 0;
        this.velocity = 0;
      }
    };
  }
  
  function keyPressed() {
    if (keyCode === 32) {
      jumper.up();
    }
  }