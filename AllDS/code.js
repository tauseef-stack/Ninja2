let prev = 0;
let count = 0;
function showOutput() {
  let I = document.getElementById("input").value;
  console.log(I);

  if (I <= 9 && I > 0) {
    let div = document.getElementById(I);
    // console.log(div);
    count++;
    if (count >= 2) {
      let prevDiv = document.getElementById(prev);
      prevDiv.style.background = "#fff";
    }
    div.style.background = "green";
    document.getElementById("input").value = "";

    prev = I;
    console.log(prev);
  } else {
    document.getElementById("input").value = "";
    alert("kindly Enter Number Between 1 to 9");
  }
}

// let btnClick = document.querySelector("button");
// btnClick.addEventListener("click", showOutput);
// let count = 0;

// function showOutput() {
//   let div = document.createElement("div");
//   let p = document.createElement("p");
//   p.textContent = `Director : Tauseef`;

//   let h4 = document.createElement("h4");
//   h4.textContent = `Music : Mat Do re baba`;
//   let h5 = document.createElement("h5");
//   h5.textContent = `Rating : 5.5*`;
//   div.append(p, h4, h5);
//   let cont = document.querySelector(".cont");
//   cont.appendChild(div);
//   count++;
//   console.log(count);
// }
