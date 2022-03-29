import { getData, appendData } from "./script/showData.js"; //not writing call with function wile importing.


import { navbar } from "./importExport.js";
const navbardata = navbar();
console.log(navbardata)
document.querySelector('.mynav').innerHTML = navbardata; //these 3 lines are for importing body html for navbar.


let head = document.querySelector('.data');
let jwelleryData = getData("https://fakestoreapi.com/products/category/jewelery");
jwelleryData.then((res) => {
    console.log(res)
    appendData(res)
})
// async function getData() {
//     let res = await fetch('https://fakestoreapi.com/products/category/jewelery');
//     let data = await res.json();
//     console.log(data);
//     appendData(data)
// }
// getData();
// var head = document.querySelector(".container");
// console.log(head)
// function appendData(d) {
//     d.forEach(({ title, image })=> {
//         let div = document.createElement('div');
//         let p = document.createElement('p');
//         p.innerText = title;
//         let img = document.createElement('img');
//         img.src = image;
//         div.append(img, p)
//         console.log(div)
//         head.append(div);
      
//     });
//     console.log(head)
// }