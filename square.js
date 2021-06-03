class Square
{
    constructor(x,y,width,height)
    {
      var options=
      {
          isStatic:false,
          restitution:1,
          friction:1,
          density:1.0
    
    
    }

      this.body=Bodies.rectangle(x,y,width,height,options);

      this.image=loadImage("Pin.jpg")
      this.width=width;
      this.height=height;
    
      World.add(world,this.body);

    }
    display()
    {
      var pos=this.body.position
      push ();
      imageMode(CENTER);
        fill ("red");
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop ();
    }
}