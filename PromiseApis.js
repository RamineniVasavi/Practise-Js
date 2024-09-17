const p11=new Promise((resolve,reject)=>{
   // setTimeout(()=>resolve("P1 success"),3000);
    setTimeout(()=>reject("P1 fails"),2000);
});

const p22=new Promise((resolve,reject)=>{
//setTimeout(()=>resolve("p2 success"),2000);
setTimeout(()=>reject("p2 fails"),2000);
});

const p33=new Promise((resolve,reject)=>{
//setTimeout(()=>resolve("p3 success"),2000);
setTimeout(()=>reject("p3 fails"),5000);
});
//Promise.all([p1,p2,p3]).then((res)=>{
//Promise.allSettled([p1,p2,p3]).then((res)=>{
//Promise.allSettled([p1,p2,p3]).then((res)=>{
Promise.any([p11,p22,p33]).then((res)=>{
console.log(res);
})
.catch((err)=>{
console.log(err);
console.log(err.errors);
});