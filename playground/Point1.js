class Point1 {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static printHola() {
    console.log("Hola");
  }


  metodoA(){
    return 1;
  }

  metodoB(){
    return 1;
  }
}

Point1.prop1 = "LOL";

module.exports = Point1;