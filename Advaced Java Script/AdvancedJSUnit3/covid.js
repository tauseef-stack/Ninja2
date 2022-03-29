let queue = ['ariba', 'zeenat', 'yusuf', 'maryam', 'shariq'];
function register() {
    let user = document.getElementById('user').value;
    queue.push(user);
    console.log(queue)

    let message = `${user}, your registration is succesfull. pleae wait for your shot`;
    alert(message)

    let promise = new Promise(function(resolve, reject) {

        setInterval(function () {
            
            if (queue[0] === user) {
            
                resolve(`${user} it's your turn`);
                clearInterval(removal);
            }
        },1000)
        
        
    });

    promise.then(function (res) {
        
        alert(res)  //whatever in resolve can be access through this
    })

        .catch(function (err) {//if promise is not resolved
        
            console.log(err);
        });
    
    let removal = setInterval(function () {
        queue.shift();
        console.log(queue);
    },3000)
}