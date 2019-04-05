
  function block() {
    this.x = w;
    this.y = 0;
    this.gravity = 0.4;
    this.velocity = 0;
    yr = 50;
    this.show = function() {
      fill(color('white'));
      rect(this.x,this.y,50,yr);
    }
    
    this.updata = function() {
      this.velocity += this.gravity;
      this.x -= this.velocity;
      if (this.x < 0) {
        this.x = w;
        this.velocity = 0;
        this.y = Math.floor(Math.random()*h);
        yr = random(150,200);
        score ++;
        document.getElementById('score').innerHTML = "Score:" + score;
      }
    }
  
  }