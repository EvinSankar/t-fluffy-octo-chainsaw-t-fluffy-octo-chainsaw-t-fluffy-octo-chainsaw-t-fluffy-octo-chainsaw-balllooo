class Box
  {
    constructor()
    {
    this.x=200;
    this.y=200;
    this.w=200;
    this.h=100;
    //this.what is this;
    }
  display(){
    rect(this.x,this.y,this.w,this.h)
  }  
  speed(a){
  
    this.x=this.x-a
  }


  }

  
