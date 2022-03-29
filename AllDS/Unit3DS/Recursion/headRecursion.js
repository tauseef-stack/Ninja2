function func(n) {
    if (n == 0) {
        return console.log(0)
    }
    else {
        func(n - 1); //function call at head.
        console.log(n)
    }
}
func(4)