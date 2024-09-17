const carts=["shoes","pants","kurtas"];

const promise=creatOrder(carts);
console.log(promise);
promise.then(function(orderid){
    console.log(orderid);
     return orderid;
})
.then(function(orderid){
   return proceedToPayment(orderid); 
})
.then(function(paymentinfo){
    console.log(paymentinfo);// this paymentinfo is the return value of previous function
})
.catch(function(err){
console.log(err.message);
})
.then(function(orderid){
console.log("NO matter what i will execute");
});

function creatOrder(cart){
    const pr=new Promise(function(resolve, reject){
if(!validatecart(cart)){
    const err=new Error("cart is not valid");
    reject(err);
}
const orderid="12345";
if(orderid){
    setTimeout(function(){
    resolve(orderid);
    },1000);
}
    });
    return pr;
}
function validatecart(cart){
    return true;//false to reject
}
function proceedToPayment(orderid){
    return new Promise(function (resolve,reject){
     resolve("payment successful");
    });
}