var cp;
var song;
  function jumper() {
    this.x = 50;
    this.y = 0;
    this.gravity = 0.5; //forces of the gravity
    this.lift = -10; //opposing the force of gravity
    this.velocity = 0;
    this.show = function() {
      image(cp,this.x,this.y,51,47);
    }
    
    this.up = function() {
      this.velocity += this.lift;//jumping function
    }
    
    this.move = function() {
      if (keyIsDown(37)&&(this.x > 50)) {
      this.x -= 10;
      //song.play();
    }
    if (keyIsDown(39)&&(this.x <50 )) {
      this.x += 10;
      //song.play();
    }
    }
    this.updata = function() {
      this.velocity += this.gravity;//Gravity applied when not jumping
      this.y += this.velocity;
      
      if (this.y > h-50) {
        this.y = h-50;
        this.velocity = 0;
      }
      if (this.y < 0) { //jumper hits the celling
        this.y = 0;
        this.velocity = 0;
      }
    }
  }
  
  function keyPressed() {
    if (keyCode === 32) {
      jumper.up();
    }
  }