async function data(){
    return "NAMASTE";
}

const datapromise=data();
console.log(datapromise);
datapromise.then((res)=>console.log(res));
//data().then((res)=>console.log(res));

const p1=new Promise((resolve,reject)=>{
 setTimeout(()=>{
    resolve("Promise p1 is resolved");
 }, 20000);
});
const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
  resolve("promise p2 is resolved");
  },40000);
});

async function handlepromise(){
  const val1=await p1;
  console.log("p1 is completed");
  console.log(val1);
  const val2= await p2;
  console.log("p2 is completed");
  console.log(val2);
}
handlepromise();