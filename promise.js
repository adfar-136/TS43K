var promise = new Promise((resolve,reject)=>{
//    resolve("Adfar Rasheed")
   reject("Adfarrrr Rasheed")
});
// console.log(promise)
promise.then((result)=>{
  console.log(result)
}).catch((error)=>{
   console.log(error)
})
