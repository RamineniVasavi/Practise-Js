function multiply(x,y){

    console.log('multiply'+x*y);

}
// currying using bind 
multiply(2,3);
let mutliplytwo=multiply.bind(this,2);
mutliplytwo(3);
const mutliplythree=multiply.bind(this,3);
mutliplythree(3);
mutliplythree(4);

//currying using closures 
let mult=function m(x){
  return function (y){
         return console.log('closure '+x*y);
  };
};

let closm2=mult(2);
closm2(3);


