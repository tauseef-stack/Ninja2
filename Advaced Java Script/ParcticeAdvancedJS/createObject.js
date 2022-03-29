function news(a,b,c,d) {
    this.timestamp = a;
    this.day = b;
    this.publisherName = c;
    this.randomId = d;
}
function random(i) {
    return Math.round(Math.random()*i)
}
var day = ["mon","tues","wed","thusrs","fri","sat","sun"]
for (var i = 0; i <=6; i++){
    var first = new news(i, day[i%7], i+'tauseef', random(i));
    console.log(first);
    
}
