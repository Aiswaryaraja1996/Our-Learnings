const fs = require('fs')
const filename = process.argv[2];
const input = fs.readFileSync(filename, 'utf8')
var inputA = input.split("\n")[0]
var inputB = input.split("\n")[1]
var train_a = {
    "CHN": 0, "SLM": 350, "BLR": 550, "KRN": 900, "HYB": 1200, "NGP": 1600, "ITJ": 1900, "BPL": 2000, "AGA": 2500, "NDL": 2700
};

var train_b = {
    "TVC": 0, "SRR": 300, "MAQ": 600, "MAO": 1000, "PNE": 1400, "HYB": 2000, "NGP": 2400, "ITJ": 2700, "BPL": 2800, "PTA": 3800, "NJP": 4200, "GHY": 4700
};

function combTrainArrangement(midStation, listObj, trainA, trainB) {
    var trainA_arr = trainA.split(" ");
    var trainB_arr = trainB.split(" ");
    var combTrain = [];
    var listString = `DEPARTURE TRAIN_AB ENGINE ENGINE`
    for (let i = 0; i < trainA_arr.length; i++) {
        if (trainA_arr[i] != "JOURNEY_ENDED" && trainA_arr[i] != "TRAIN_A" && trainA_arr[i] != "TRAIN_B" && trainA_arr[i] != "ARRIVAL" && trainA_arr[i] != "ENGINE" && trainA_arr[i] != midStation) {
            combTrain.push([trainA_arr[i], listObj[trainA_arr[i]]])
        }
    }
    trainA_arr = arrayRemove(trainA_arr, midStation);
    for (let i = 0; i < trainB_arr.length; i++) {
        if (trainB_arr[i] != "JOURNEY_ENDED" && trainB_arr[i] != "TRAIN_A" && trainB_arr[i] != "TRAIN_B" && trainB_arr[i] != "ARRIVAL" && trainB_arr[i] != "ENGINE" && trainB_arr[i] != midStation) {
            combTrain.push([trainB_arr[i], listObj[trainB_arr[i]]])
        }
    }
    trainB_arr = arrayRemove(trainB_arr, midStation);
    combTrain.sort(function (a, b) {
        return b[1] - a[1];
    });
    if (trainA_arr.length <= 3 || trainB_arr.length <= 3) {
        listString = `DEPARTURE TRAIN_AB ENGINE`
    }
    if (trainA_arr.length <= 3 && trainB_arr.length <= 3) {
        listString = "JOURNEY_ENDED"
    }
    for (let i = 0; i < combTrain.length; i++) {
        listString = `${listString} ${combTrain[i][0]}`
    }
    console.log(listString);
}

function indTrainArrangement(listObj, trainStationList) {
    var stationArr = trainStationList.split(' ');
    var listString = `ARRIVAL ${stationArr[0]} ${stationArr[1]}`
    for (var i = 0; i < stationArr.length; i++) {
        if (stationArr[i] != "TRAIN_A" && stationArr[i] != "TRAIN_B" && stationArr[i] != "ENGINE") {
            if (listObj[stationArr[i]] >= 0) {
                listString = `${listString} ${stationArr[i]}`
            }
        }
    }
    if (listString == `ARRIVAL ${stationArr[0]} ${stationArr[1]}`) {
        listString = "JOURNEY_ENDED"
    }
    return listString;
}

function middleStation(midStation, aTrain, bTrain) {
    let train_ab = [];
    let trainObj = {};
    for (let station in aTrain) {
        train_ab.push([station, aTrain[station] - aTrain[midStation]])
    }
    for (let station in bTrain) {
        train_ab.push([station, bTrain[station] - bTrain[midStation]])
    }
    train_ab.sort(function (a, b) {
        return a[1] - b[1];
    });
    for (var i = 0; i < train_ab.length; i++) {
        trainObj[train_ab[i][0]] = train_ab[i][1];
    }
    return trainObj;
}

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

function main() {
    let newObj = middleStation("HYB", train_a, train_b);
    let arrivalA = indTrainArrangement(newObj, inputA)
    let arrivalB = indTrainArrangement(newObj, inputB)
    console.log(indTrainArrangement(newObj, inputA));
    console.log(indTrainArrangement(newObj, inputB));
    combTrainArrangement("HYB", newObj, arrivalA, arrivalB)
}

main();