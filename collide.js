var cop;
function collide(){
  this.x = w/2;
  this.y = h/2;
  
  this.show = function(){
   image(cop,this.x,this.y,130,130);
  }
}