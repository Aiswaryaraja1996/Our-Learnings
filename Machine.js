function machineTime() {
    var numParts = 7;
    var machTimeA = 2;
    var machTimeB = 3;
    var machTimeC = 5;
    var totTime = 0;
    var countParts = 0;
    for (var i = 1; i < numParts; i++) {
        totTime = machTimeA * i;
        countParts++;
        if(countParts == numParts){
            console.log("Final number of parts : " + countParts);
            break;
        }
        console.log("No of parts created : " + countParts);
        if (totTime >= machTimeB) {
            console.log("Machine B created");
            console.log("Total Time : " + totTime);
            countParts++;
            console.log("Parts created machi: " + countParts);
            if(countParts == numParts){
                console.log("Final number of parts : " + countParts);
                break;
            }  
        }
        if (totTime >= machTimeC) {
            console.log("Machine C created");
            console.log("Total Time : " + totTime);
            countParts++;
            console.log("Parts created : " + countParts);
            if(countParts == numParts){
                console.log("Final number of parts : " + countParts);
                break;
            }
        }
        console.log("Total parts req : "+numParts);
        console.log("Created till now : "+countParts); 
    }
    console.log("Total Time : "+totTime);
}
machineTime();