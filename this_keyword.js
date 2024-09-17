console.log(this);// inside global space
//inside function

function x(){
    "use strict";
  console.log(this);
};
x();// gives undefined
window.x();// gives window object 

// inside a object
const obj={
a:10,
x:function (){
  console.log(this);
}
};
obj.x();

//arrow functions 
const obj3={
  a:30,
   y:()=>{
    console.log(this);
  }
}
obj3.y();
const obj2={
  a:30,
  x:function y(){
   const y=()=>{
    console.log(this);
  }
  y();
}
};
obj2.x();
