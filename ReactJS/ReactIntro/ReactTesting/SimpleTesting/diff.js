function diff(a, b) {
    if (arguments.length !== 2) {
        return "Invalid no argumments";
    }
    if (typeof a !== "number" || typeof b !== "number") {
        return "Invalid type of argumnets";
    }
    return a - b;
}

module.exports = diff;