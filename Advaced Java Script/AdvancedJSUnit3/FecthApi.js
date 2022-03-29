/*fetch("http://jsonplaceholder.typicode.com/posts") //Only fetch not in variable.
  .then(function (res) {
    //res.json() - collect data
    return res.json();
  })
  .then(function (res) { //If promise is fulfilled;
    console.log("res:", res);
  })
  .catch(function (err) { //If promise is rejected with error;
    console.log("we have an error", err);
  })
  .finally(function () {//if promise is settled either success or rejected;
    console.log("my promise is settled");
  }); */


  //async await version of above code

//settled promise vs resolved promise

 /*async function makeRequest() {
  //error handling in async await

  try {
    let response = await fetch("http://jsonplaceholder.typicode.com/posts"); //await neccessary

      var data = await response.json(); //Brings Data Out
      console.log("data:", data);

  } catch (e) {
    console.log("e:", e); //If Error in promise/rejected
  }
  finally {
      
      console.log('completed') // promise settled 
   } 

}

makeRequest();*/

