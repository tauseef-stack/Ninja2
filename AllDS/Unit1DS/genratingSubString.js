var n = `Aman`;
for (var i = 0; i < n.length; i++){
    for (var j = i; j < n.length; j++){
        var res = '';
        for (var k = i; k<=j; k++){
            res+=n[k]
        }
        console.log(res)
    }
}
