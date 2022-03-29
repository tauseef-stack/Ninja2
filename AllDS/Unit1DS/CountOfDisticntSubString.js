var str = `xudeowdtvjdhdhmxm`;
str.split("");
var n = str.length;
var count =0;
var sum = 0;
var countsum = 0;
var obj  = {};
for (i = 0; i < n; i++){
    for (j = i; j < n; j++){
        var res = '';
        for (var k = i; k <= j; k++){
            res += str[k];
            if (obj[res] == undefined) {
                obj[res] = 1;
            }
            else {
                obj[res] += 1;
            }
        }
    }
}
var key = Object.keys(obj);
console.log(key.length);