
  function block() {
    this.x = w;
    this.y = 0;
    this.gravity = 0.4;
    this.velocity = 0;
    this.show = function() {
    image(blockp,this.x,this.y,170,85);
    }
    
    this.updata = function() {
      this.velocity += this.gravity;
      this.x -= this.velocity;
      if (this.x < 0) {
        this.x = w;
        this.velocity = 0;
        this.y = Math.floor(Math.random()*h);
        score ++;
        document.getElementById('score').innerHTML = "Score:" + score;
        song1.play();
      }
    }
  
  }
  
  function block2() {
    this.x = w;
    this.y = 0;
    this.gravity = 0.4;
    this.velocity = 0;
    this.show = function() {
    image(blockp,this.x,this.y,170,85);
    }
    
    this.updata = function() {
      this.velocity += this.gravity;
      this.x -= this.velocity;
      if (this.x < 0) {
        this.x = w;
        this.velocity = 0;
        this.y = Math.floor(Math.random()*h);
        song1.play();
      }
    }
  
  }

  function block3() {
    this.x = w;
    this.y = 0;
    this.gravity = 0.4;
    this.velocity = 0;
    this.show = function() {
    image(blockp,this.x,this.y,170,85);
    }
    
    this.updata = function() {
      this.velocity += this.gravity;
      this.x -= this.velocity;
      if (this.x < 0) {
        this.x = w;
        this.velocity = 0;
        this.y = Math.floor(Math.random()*h);
        song1.play();
      }
    }
  
  }

  function block4() {
    this.x = w;
    this.y = 0;
    this.gravity = 0.4;
    this.velocity = 0;
    this.show = function() {
    image(blockp,this.x,this.y,170,85);
    }
    
    this.updata = function() {
      this.velocity += this.gravity;
      this.x -= this.velocity;
      if (this.x < 0) {
        this.x = w;
        this.velocity = 0;
        this.y = Math.floor(Math.random()*h);
        song1.play();
      }
    }
  
  }