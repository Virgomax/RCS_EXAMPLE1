var V,W,X,Y,Z,v,w,x,y,z;

V = class {
  constructor(){

  }
  message(s) { var mymessage = s + "";}
  addition(i,j) { return (i *2 + j * 2) / 2; }
}

W = class {
  constructor(){

  }
}
W.message = (s) => { var mymessage = s + "";};
W.addition = (i,j) => { return (i *2 + j * 2) / 2; }

X = function() {};
X.prototype.message = function(s) { var mymessage = s + "";};
X.prototype.addition = function(i,j) { return (i *2 + j * 2) / 2; };

Y = function() {
    this.message = function(s) { var mymessage = s + "";}
    this.addition = function(i,j) { return (i *2 + j * 2) / 2; }
};

Z = {
 message: function(s) { var mymessage = s + "";}
 ,addition: function(i,j) { return (i *2 + j * 2) / 2; }
}



function TestPerformance()
{

  var normalClassStartDateTime = new Date();
  for (var i = 0; i < 100000; i++)
  {
    v = new V();
    v.message('hi');
    v.addition(i,2);
  }
  var normalClassEndDateTime = new Date();

  var prototipeClassStartDateTime = new Date();
  for (var i = 0; i < 100000; i++)
  {
    
    W.message('hi');
    W.addition(i,2);
  }
  var prototipeClassEndDateTime = new Date();


  var closureStartDateTime = new Date();
  for (var i = 0; i < 100000; i++)
  {
 y = new Y();
    y.message('hi');
    y.addition(i,2);
  }
  var closureEndDateTime = new Date();

  var prototypeStartDateTime = new Date();
  for (var i = 0; i < 100000; i++)
  {
    x = new X();
    x.message('hi');
    x.addition(i,2);
  }
  var prototypeEndDateTime = new Date();

  var staticObjectStartDateTime = new Date();
  for (var i = 0; i < 100000; i++)
  {
 z = Z; // obviously you don't really need this
    z.message('hi');
    z.addition(i,2);
  }
  var staticObjectEndDateTime = new Date();


  var normalClassTime = normalClassEndDateTime.getTime() - normalClassStartDateTime.getTime();
  var prototipeClassTime = prototipeClassEndDateTime.getTime() - prototipeClassStartDateTime.getTime();
  var closureTime = closureEndDateTime.getTime() - closureStartDateTime.getTime();
  var prototypeTime = prototypeEndDateTime.getTime() - prototypeStartDateTime.getTime();
  var staticTime = staticObjectEndDateTime.getTime() - staticObjectStartDateTime.getTime();
  
  console.log("prototipeClassTime time: " + prototipeClassTime);
  console.log("normalClass time: " + normalClassTime);
  console.log("Closure time: " + closureTime);
  console.log("prototype time: " + prototypeTime);
  console.log("static object time: " + staticTime);
}

TestPerformance();