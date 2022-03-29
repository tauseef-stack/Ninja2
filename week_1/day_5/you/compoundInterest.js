/* compound Interest
formula,
copound interest = principal*(1+rate of interest/100)^time - principal
*/
var p = 10000; // p = priciple amont
var r = 5; // r = rate of interest
var t = 4; // t = time of priciple amount
var ci = p * (1 + r / 100) ** t - p;

console.log(ci)