class Shape{
    constructor()
  {
    this.shapeColor="";
  }  
  setShapeColor(shapeColor)
  {
    this.shapeColor=shapeColor;
  }
}
class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
      }
}