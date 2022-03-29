var arr1 = [{ name: "tauseef" }, { age: 27 }];
var arr2 = [{ name: "tauseef" }];
for (var i = 0; i < arr2.length; i++){
    if (arr1[i].name === arr2[0].name) {
        console.log('Comparison Successfull');
    }
}