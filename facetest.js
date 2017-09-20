function closest(list, x) {
    var min,
        chosen = list[0];
    for (var i in list) {
        min = Math.abs(chosen - x);
        if (Math.abs(list[i] - x) < min) {
            chosen = list[i];

        }
    }

    return list.indexOf(chosen);
}

let list = [0,0,0,0,0,0.986,0.009,0.005]
console.log(closest(list,1))