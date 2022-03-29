var obj = {
    name: 25,
    age: 28,
    grad:4,
};
var key = Object.keys(obj);
console.log(key)

for (var i = 0; i < key.length; i++){
    console.log(obj[key[i]]);
}