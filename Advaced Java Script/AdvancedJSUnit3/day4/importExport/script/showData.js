async function getData(url) {
    let res = await fetch(url);//https://fakestoreapi.com/products/category/jewelery
    let data = await res.json();
    console.log(data);
    return data;
  
  //  appendData(data) no need of function call.
}

//console.log(head)
function appendData(d) {
    var head = document.querySelector(".container");

    d.forEach(({ title, image })=> {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = title;
        let img = document.createElement('img');
        img.src = image;
        div.append(img, p)
        console.log(div)
        head.append(div);
      
    });
    console.log(head)
}

//getData() no need of function call.

export {getData,appendData} //we are exporting these 2 functions to the other page bcoz these 2 functions are exactly same on both pages.