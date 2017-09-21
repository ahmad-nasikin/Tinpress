function closest(list,x) {
    // var min,
    //     chosen = list[0];
    // for (var i in list) {
    //     min = Math.abs(chosen - x);
    //     if (Math.abs(list[i] - x) < min) {
    //         chosen = list[i];

    //     }
    // }
    // var arr = []
    // for (var i in list) {
        
    // }

    var min,
    chosen = list[0];
    for (var i in list) {
        min = Math.abs(chosen - x);
        if (Math.abs(list[i] - x) < min) {
            chosen = list[i];
        }
    }

    console.log(list.indexOf(chosen))
    console.log(list.indexOf(list[list.indexOf(chosen)+1]))
    console.log(list.indexOf(list[list.indexOf(chosen)+2]))
    // console.log(list.indexOf(chosen))
}

let list = [0,0,0,0,0,0.986,0.009,0.005]
// list.sort(function(a,b){return b-a})
console.log(closest(list,3))