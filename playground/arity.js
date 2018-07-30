var arity = require('util-arity');  // https://github.com/blakeembrey/arity/blob/master/arity.js

var fn = function (agr1, ar) {
  for(const elem in arguments)
  {console.log(elem);}
};

var oneArg = arity(1, fn);
var twoArgs = arity(2, fn);
var threeArgs = arity(3, fn);

console.log(oneArg.length); //=> 1
console.log(twoArgs.length); //=> 2
console.log(threeArgs.length); //=> 3
/*
console.log(typeof oneArg);


oneArg('holy1');
twoArgs('holy1','holy2','dsdf');
threeArgs('holy1','holy2','holy3');
console.log(twoArgs);*/