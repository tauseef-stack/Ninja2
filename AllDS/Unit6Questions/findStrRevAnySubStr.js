let str = `aba`;
for (var j = 2; j < str.length; j++){
    for (var i = 1; i < str.length-j+1; i++){
        let pre = str.substr(0, i)
        let rev = str.substr(i, j).split("").reverse().join("");
        let post = str.substr(i + j);
        console.log(pre,rev,post)
    }
    
}








  
    
    


 