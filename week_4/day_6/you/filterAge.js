var arr = [
    {name : "Nrupul" , age:32},
    {name : "Prateek" , age:29},
    {name : "Aman" ,  age:26},
    {name : "Albert" , age:28},
    {name : "Yogesh" , age:44}
]
var newArr = arr.filter(function(item) {
    return item.age>30;
});
console.log(newArr)

for(i=0 ; i<newArr.length ; i++) {
    console.log(newArr[i].name)
}