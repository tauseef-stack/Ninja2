let slotsA = [[10, 50], [60, 120], [140, 210]]
let slotsB = [[0, 15], [60, 70]]
let dur = 11;
let arr = [];

let ia = 0;
let ib = 0;

while (ia < slotsA.length && ib < slotsB.length) {
    start = max(slotsA[ia][0], slotsB[ib][0])
    end = min(slotsA[ia][1], slotsB[ib][1])

    if (start + dur <= end)
        return [start, start + dur]

    if (slotsA[ia][1] < slotsB[ib][1])
        ia++
    else {
        ib++ 
    }
       

    return []
}
  