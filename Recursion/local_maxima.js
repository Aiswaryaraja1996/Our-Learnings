function runProgram(n) {
    n.trim();
    var testArray = n.split("\n");
    var testCaseNo = testArray[0];
    //console.log("Number of test cases : " + testCaseNo);
    for (var i = 1; i <= testCaseNo; i++) {
        var count = 1;
        var localMax = 0;
        localMaxima(count, testArray[2 * i].split(" "), localMax);
    }
}
function localMaxima(counts, values, localMax) {
    if (values.length < 3) {
        console.log("-1");
    }
    else if (counts < values.length) {
        counts++
        if (values[counts] > values[counts - 1] && values[counts] > values[counts + 1]) {
            //console.log(values[counts]);
            localMax++;
        }
        localMaxima(counts, values, localMax);
    }
    else console.log(localMax);
}
runProgram(`2
2
1 3
10
884 729 768 201 266 494 597 328 705 287`);