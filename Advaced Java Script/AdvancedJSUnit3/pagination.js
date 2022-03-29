async function getData() {

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/comments");
        let data = await response.json();
        return data;

    }
    catch (e) {
        console.log(e)
    }
    finally {
        console.log('Promise settled')
    }
   
}
//Asunc functin always amke a promise.

var data; //Global variable.
var datadiv = document.getElementById('data');
async function main() {
     data = await getData();//Bcoz of Async Function Await Bcoz it's promise
    console.log(data);
    showButtons(1);//important
    
}
main()

//Step 2 :Button Part

function showButtons(index) {

    console.log(index)
    let buttonsdiv = document.getElementById('buttons');

    buttonsdiv.innerHTML = null;

    let originalId = index;
    if (index <= 6) {
        index = 6;
     }
    else if (index > 50) { //for edge case.
        index = 50;
    }
    
    for (let i = index-5; i <= index+4; i++){
        let btn = document.createElement('button');
        btn.innerText = `${i}`;
        btn.setAttribute('id', `${i}`);
        btn.onclick = showData;
        buttonsdiv.append(btn);
    }

    let btn = document.getElementById(originalId);
    btn.style.background = 'green';
}

//Step 3 :showing data.
function showData() {
    let id = Number(this.id);
    console.log(this.id);
    let num = id - 1;
    let pageData = data.slice(num * 10, num * 10 + 10);
    console.log(pageData);
    let datadiv = document.getElementById('data');

    datadiv.innerHTML = null;
    console.log(pageData);

    pageData.forEach(function (el) {
       
        let p = document.createElement('p');
        p.innerText = `${el.id} ${el.name}`;
        datadiv.append(p)
        
    })

    showButtons(id); //Since on each click event i also want change button name.
}