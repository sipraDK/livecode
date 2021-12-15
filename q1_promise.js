
var promise = new Promise (function(resolve,reject){
    setTimeout (function(){
        resolve ('sleep')
    },2000)
})
promise.then(function(data){
    console.log(data)
})