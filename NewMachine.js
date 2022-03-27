function machineTime() {
    var reqNoParts = 7;
    var machTime = [2, 3, 5];
    var machUsage = Array(machTime.length).fill(0);
    var partsCreated = 0;

    for (var i = 1; i <= reqNoParts*machTime.length; i++) {
        var currentTime = i;
        console.log(`Total time till now : ${currentTime}`);
        if (partsCreated == reqNoParts) break;
        for (var k = 0; k < machTime.length; k++) {
            partsCreated = partsCreated + checkTime(currentTime, machTime, machUsage, k);
            if (partsCreated == reqNoParts) break;
        }
        if (partsCreated == reqNoParts) break;
    }
}
function checkTime(time, timeArray, usageArray, iter) {
    var count = 0;
    if (time - (timeArray[iter]*usageArray[iter]) >= timeArray[iter]) {
        console.log(`Machhine ${iter+1} created a part`);
        count++;
        usageArray[iter]++;
        console.log("Machine usage : "+usageArray);
    }
    return count;
}

machineTime();