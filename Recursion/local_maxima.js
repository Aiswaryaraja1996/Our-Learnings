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

    else{
        for(var i=counts;i<values.length-1;i++){
            if(values[i] > values[i - 1] && values[i] > values[i + 1]){
               // console.log(values[i]);
                localMax++;
            }
        }
        if (localMax > 0) console.log(localMax);
        else console.log("-1");
    }
    
    // if (values.length < 3) {
    //     console.log("-1");
    // }
    // else if (counts < (values.length-1)) {
        
    //     if (values[counts] > values[counts - 1] && values[counts] > values[counts + 1]) {
    //         //console.log(values[counts]);
    //         localMax++;
    //     }
    //     counts++
    //     localMaxima(counts, values, localMax);
    // }
    // else {
    //     if (localMax > 0) console.log(localMax);
    //     else console.log("-1");
    // }
}
runProgram(`5
1
1
3
1 2 1
2
2 1
5
2 4 3 5 1
6
1 2 3 4 5 6`);