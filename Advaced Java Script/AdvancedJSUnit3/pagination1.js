//step 1 :getting data from place holder.

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await response.json();
    //instead of consoling we are returning it so that we can take it in variable as a promise.
    return data;
}
var data;
async function main() {
    data = await getData(); //Withoout await it will through me promise.
    console.log(data)
      showButtons(1); // 1 .Otherwise we are not able to see buttons
    //bcoz i already call main().no need of seprate call.
}
main();

//step 2 : creating buttons;
function showButtons(id) {
    let buttonsdiv = document.querySelector('.buttons');
    buttonsdiv.innerHTML = null;
   // console.log(buttonsdiv)
    console.log(id)
    let realid = id; //Bcoz further this id will get change.
    if (id <= 6) {
        id = 6;
    }
    else if (id >= 50) { //6-5 =1 && 6+4=10
        id = 50;         //id=8 , 3to11 && id=9 , 4To12
    }

for (var i =id-5; i <= id+4 ; i++) { //Cannot hard code bcoz numbers are changing
    let btn = document.createElement("button");
    //console.log(btn)
    btn.innerText = `${i}`;
    btn.setAttribute('id',i)
    btn.onclick = showData; //remember never write () here.
    buttonsdiv.append(btn);
    }
     document.getElementById(realid).style.background = 'pink'
}

//step 3: showing Data on web page.
function showData() {
    let id = Number(event.target.id) //Converting of Id of Each Button into number we can use this also
    console.log(id)
    let num = id - 1;
    let pagedata = data.slice(num * 10, num * 10 + 10);
    // console.log(data)
    console.log(pagedata) //we hhave 10 data so we need to loop through it to append all.
    let datadiv = document.querySelector(".data");
    datadiv.innerHTML = null;

    pagedata.forEach(function (el) {
        let p = document.createElement("p");
        p.innerText = `${el.id} ${el.name}`;
        datadiv.append(p);
    })
    
    showButtons(id); //step 4 : button sliding after 6 click like google.we will make change in this function
         
}





