// let p= Promise.resolve("resolved");

// p.then(val=>console.log(val));


// const promise=()=>{
// return Promise.resolve();

// }
// promise().then(()=>console.log(name));
// const name= "molapo";

const makeApiCall=(time)=>{
return new Promise((resolve, reject) => {
   setTimeout(()=>{
    resolve("this is it");
   },time);
// resolve("this is it");
});


}
// makeApiCall(1000).then(val=>console.log(val));
let multiApiCall=[makeApiCall(1000),makeApiCall(500),makeApiCall(400)];
Promise.all(multiApiCall).then(val=>console.log(val));

