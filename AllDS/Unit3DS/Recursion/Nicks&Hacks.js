var n = 30;
const multiple = (n,k) => {
    if (n === 1) {
        return true;
    }
    else if (n === k) {
        return true;
    }
    else if (k > n) {
        return false;
    }
    else {
        return multiple(n, k * 10) || multiple(n, k * 20);
    }
}

const isGiven = multiple(n,1)

if (isGiven) {
      console.log("Yes")
}
else {
    console.log("No")
  }
