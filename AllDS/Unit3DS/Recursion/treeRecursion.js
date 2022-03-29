//more than one recursion call is there.
function func(n)  {
    if (n === 0) {
        return
    }
    else {
        console.log(n)
        func(n - 1)
        func(n - 1);
    }
}
func(3); //no need of main function call.