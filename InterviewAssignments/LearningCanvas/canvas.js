var canvas = document.querySelector("canvas");
canvas.style.border = "1px solid black";
canvas.width = 1632;
canvas.height = 650;
var c = canvas.getContext("2d");

//Making Rectangle ==> first we need to give style then diemennsion works irrespective of command .fill() or .stroke();
// c.fillStyle = "rgba(255,0,0,0.5)";
// c.fillRect(0, 0, 1362, 650);
// c.fillStyle = "green";
// c.fillRect(30, 30, 20, 20);

//Line ==>
// c.beginPath(); //creates new Object , beaks connection from previouss Object ==>
// c.moveTo(100, 100); //Starting point ==>
// c.lineTo(100, 100); //End point ==>
// c.lineTo(100, 100);
// c.lineTo(100, 100);
// c.strokeStyle = "blue";
// c.stroke();

//Curve
// c.beginPath();
// c.arc(100, 100, 25, 0, Math.PI * (4 / 2));
// c.arc(100, 100, 25, 0, Math.PI * (4 / 2));
// c.arc(100, 100, 25, 0, Math.PI * (4 / 2));
// c.strokeStyle = "aqua";
// c.stroke();

// for (var i = 0; i < 5; i++) {
//   num = Math.random();
//   let x = Math.random() * 1362;
//   let y = Math.random() * 650;
//   c.beginPath();
//   c.arc(x, y, 100, 0, Math.PI * 2);
//   c.strokeStyle = `rgb(${255 * Math.random()},${255 * Math.random()},${
//     255 * Math.random()
//   })`;
//   c.stroke();
// }
function random() {
  return Math.floor(Math.random() * 255);
}

var mouse = {
  x: undefined,
  y: undefined,
};
var maxRadius = 60;
//var minRadius = 5;
var colArr = ["#D95F69", "#F2E18D", "#BFB99B", "#F29544", "#F2F2F2"];
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log(mouse);
});

//Circle Constructor ==>
function Circle(x, y, dx, dy, rad, col) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.rad = rad;
  this.minRadius = rad;
  this.col = col;
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
    // c.strokeStyle = "blue";
    c.stroke();
    c.fillStyle = this.col;
    c.fill();
  };

  this.update = function () {
    if (this.x + this.rad > 1362 || this.x - this.rad < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.rad > 650 || this.y - this.rad < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    //Interactivity ==>
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.rad < maxRadius) {
        this.rad += 1;
      }
    } else if (this.rad > this.minRadius) {
      this.rad -= 1;
    }

    this.draw();
  };
}
//var circle = new Circle(15, 15, 1, 1, 7);
//circle.draw();

let circleArr = [];
for (var i = 0; i < 800; i++) {
  var rad = Math.random() * 10 + 1;
  var x = Math.random() * (1362 - 2 * rad) + rad;
  var y = Math.random() * (650 - 2 * rad) + rad;
  var dx = (Math.random() - 0.5) * 1;
  var dy = (Math.random() - 0.5) * 1;
  var col = colArr[Math.round(Math.random() * colArr.length)]; //`rgb(${random()},${random()},${random()})`;
  circleArr.push(new Circle(x, y, dx, dy, rad, col));
}
//console.log(circleArr);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, 1362, 650);

  for (var i = 0; i < circleArr.length; i++) {
    //circleArr[i].draw();
    circleArr[i].update();
  }
  //   circle.draw();
  //   circle.update();
  //   c.beginPath();
  //   c.arc(x, y, rad, 0, 2 * Math.PI);
  //   c.strokeStyle = "aqua";
  //   c.stroke();

  //   if (x + rad > 1362 || x - rad < 0) {
  //     dx = -dx;
  //   }
  //   if (y + rad > 650 || y - rad < 0) {
  //     dy = -dy;
  //   }
  //   x += dx;
  //   y += dy;
}
animate();
