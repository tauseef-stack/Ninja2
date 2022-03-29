//How to create a promise Syntax.  Promise is an Object.
const promise = new Promise(function (resolve, reject) { //reject and resolve are only keywords.else can be used.
   
    resolve('succesfull');
    reject('error'); //function resolve (value) { return value}
});
console.log(promise);

//How to Access the Promise value.
//For resolve var.then;
//for reject var.catch;

promise.then(function (res) { //res stands for response
    console.log(res)
});

//How to handle return value => .then .catch;
promise.catch(function (err) {
    console.log(err);
});

//Promise using setInterval.
const promise1 = new Promise(function (resolve, reject) {
    setInterval(function () {
        resolve('sucessfully')
    })
}, 5000);

promise1.then(function (res) {
    console.log(res)
});

//multiple promisess behaviour.

const promise2 = new Promise(function (resolve, reject) {
    setInterval(function () {
        resolve('sucessfully2')
    })
}, 5000);

const promise3 = new Promise(function (resolve, reject) {
    setInterval(function () {
        resolve('sucessfully3')
    })
}, 6000);

const promise4 = new Promise(function (resolve, reject) {
    setInterval(function () {
        resolve('sucessfully4')
    })
}, 7000);

Promise.all([promise2, promise3, promise4]).then(function (res) {
    console.log(res) //.all=waits for all time inteval and execute all simaltaneously.
                     //.any=executes only one having min time value.
})                   //.race=.any;

