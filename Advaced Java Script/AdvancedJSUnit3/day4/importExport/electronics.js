import {getData,appendData} from "./script/showData.js"

import {navbar} from "./importExport.js";
const navbardata = navbar();
document.querySelector('.mydiv').innerHTML = navbardata; //these 3 lines are for importing body html for navbar.

let electronicsData = getData("https://fakestoreapi.com/products/category/electronics");
electronicsData.then((res) => {
    console.log(res);
    appendData(res)
});

// async function getData() {
//     let res = await fetch('https://fakestoreapi.com/products/category/electronics');
//     let data = await res.json();
//     console.log(data);
//     appendData(data)
// }
// getData();
// let head = document.querySelector(".container");
// function appendData(d) {
//     d.forEach(({ title, image }) => {
//         let div = document.createElement('div')
//         let p = document.createElement('p');
//         p.innerText = title;
//         let img = document.createElement('img');
//         img.src = image;
//         div.append(img, p);
//         head.append(div);
//     })
// } //comment out these 2 functions bcoz we are importing these 2 functions.