function sort() {
    var array = [3, 1, 4]

    var count = 0;
    for (var i = 1; i < array.length - 1; i++) {
        var count1 = Math.abs(array[i] - array[i - 1]);
        var count2 = Math.abs(array[i] - array[i + 1]);
        console.log(`'Count 1 = ${count1} and Count 2 = ${count2}'`);
        if (count1 < count2 && array[i-1] > array[i]) {
            console.log(`'Case 1 : Count 1 = ${count1} and Count 2 = ${count2}'`);
            console.log(`'Value 1 = ${array[i-1]} and Value 2 = ${array[i]}'`);
            array[i] = array[i-1];
            count = count + count1;
            console.log("Count = "+count);
        }
    }
}
sort();