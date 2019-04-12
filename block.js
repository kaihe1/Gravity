var blockp;
  function block() {
    this.x = w;
    this.y = 0;
    this.gravity = 0.4;
    this.velocity = 0;
    this.show = function() {
    image(blockg,this.x,this.y,170,85);
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
      }
    }
  
  }