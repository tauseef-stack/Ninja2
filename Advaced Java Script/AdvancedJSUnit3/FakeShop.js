head = document.getElementById('container');
async function getData() {

    try {//instead of .then
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        appendProducts(data);
        console.log(data);
    }
    catch(e) {
       console.log(e) 
    }
    finally {
        console.log('Promise is settled')
    }
   
}

getData();

function appendProducts(d) {

    d.forEach(function (el) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.image;
        let title = document.createElement('p');
        title.textContent = el.title;
        let price = document.createElement('p');
        price.textContent = el.price;
        desc = document.createElement('p');
        desc.textContent = el.description;
        div.append(img, title, price, desc)
       
        head.append(div)
    })
    
}