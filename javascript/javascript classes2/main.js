class Rectangle {
    
    Width;
    Height;
    Color="white";
    constructor (width,height){
        this.Width=width;
        this.Height=height;
    }
    get Area(){
        return this.calcArea();
    }
    calcArea(){
      return this.Height*this.Width;  
    }
}

let rect1 = new Rectangle(6,3);
rect1.Color="red";
console.log(rect1.Area);