const throfunct =(params) =>{
    return console.log("hit");
}

const Implement_throttling= (func,timer)=>{
let flag=true;
return function(args){
if(flag){
    flag=false;
    setTimeout(()=>{
        func.apply(this,[args]);
         flag=true;
    },timer)
}
}
}
const callthro=Implement_throttling(throfunct,1000);