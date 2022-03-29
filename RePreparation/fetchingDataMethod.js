//Using Async Await(2times)
async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  console.log(data);
}
getData();

//Getting Data in try catch block ==>
function getDataTry() {
  fetch("https://jsonplaceholder.typicode.com/posts").then(function (res) {
    res.json().then(function (data) {
      console.log(data);
    });
  });
}
getDataTry();

function ajaxCall() {
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    success: function (data) {
      console.log(data);
    },
    error: function (e) {
      console.log("Error to get data");
    },
  });
}
ajaxCall();

//Get and post using dummy api ==>
//1) Using async await ==>
//data which is required to send ==>
let post = {
  id: 101,
  userId: 202,
  title: "Tauseef",
  body: "I am an sofftware developer",
};
let mypost = JSON.stringify(post);
console.log(mypost);
async function postAsyncRequest() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: mypost,
      headers: {
        contentType: "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.log("Internal server Error");
  }
}
postAsyncRequest();

function postUsingThen() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: mypost,
    headers: {
      contentType: "application/json",
    },
  }).then((res) => {
    res
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Internal server Error");
      });
  });
}
postUsingThen();

//Post Using ajax ==>
function ajaxPost() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    body: post, //no need to convert it into JSON
    headers: {
      "Content-Type": "application/json",
    },
    success: function (data) {
      console.log(data);
    },
    error: function (err) {
      console.log(err);
    },
  });
}
ajaxPost();
