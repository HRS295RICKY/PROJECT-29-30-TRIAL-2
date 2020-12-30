class block  {
    constructor(x,y,width,height){
      var options={
          'restitution' : 1,
         
      }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;

       
       
    }
    display(){
       
       
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);

        rect(0,0,this.w,this.h);
        pop();
    } 
}