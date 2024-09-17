// if we search anything in textbox, after 300ms it hits getdata function
//https://www.freecodecamp.org/news/deboucing-in-react-autocomplete-example/#:~:text=Debouncing%20is%20a%20strategy%20used,a%20certain%20period%20of%20time.
//check above link to understand better
let counter=0;
function getData(text){
    return console.log("encountered "+text, ++counter);
}

const Debouncefn=function(fn,time){
    let timer;
    return function(args){
       // let context=this;
       // args=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
         fn.apply(this,[args]);
        },time)
    }
}
const betterfunct=Debouncefn(getData,300);