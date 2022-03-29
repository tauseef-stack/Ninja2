//Using async await for promise

let BtoG = ['ariba', 'zeenat', 'yusuf', 'maryam', 'shariq', 'ariba', 'zeenat', 'yusuf', 'maryam', 'shariq'];
let MtoG = ['ariba', 'zeenat', 'yusuf', 'maryam', 'shariq', 'ariba', 'zeenat', 'yusuf', 'maryam', 'shariq'];
let PtoG = ['ariba', 'zeenat', 'yusuf', 'maryam', 'shariq', 'ariba', 'zeenat', 'yusuf', 'maryam', 'shariq'];

async function checkAvailability() {
    console.log('i am clicked')
    let promise = new Promise(function (resolve, reject) {

        setInterval(function () {
            if (BtoG.length < 5) {
                resolve('train1 is available')
                clearInterval(removal)
            }
            if (MtoG.length < 5) {
                resolve('train2 is available')
                clearInterval(removal)
            }
            if (PtoG.length < 5) {
                resolve('train3 is available')
                clearInterval(removal)
            }
        }, 1000)

      
        
    });

    let res = await promise  //Instead of .then OR .catch  we are using await promise.
    console.log(res)         //Outside of promise inside of Async function.


} //end of async function;


 let removal = setInterval(function () {
    let cancellingSpeed1 = Math.round(Math.random() * 1)
let cancellingSpeed2 = Math.round(Math.random() *5)
let cancellingSpeed3 = Math.round(Math.random() * 10)
    
    setTimeout(function () { //runs code only once. after certain time interval not repeatedly like setinterval
        BtoG.pop();
    }, cancellingSpeed1 * 1000)
    
    setTimeout(function () {
        MtoG.pop();
    }, cancellingSpeed2 * 1000)
    
    setTimeout(function () {
        PtoG.pop();
    }, cancellingSpeed3 * 1000)
    
    console.log(BtoG, MtoG, PtoG)


},2000)

   


