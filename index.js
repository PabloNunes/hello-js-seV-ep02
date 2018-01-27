let numberList = [1,2,3,4,5,6,7,8,9,10]

numberList = numberList.map ( function (i){
    if (i%2 == 0) {
        return i + "x"
    }
    else {
        return i + "p"
    }
});

console.log(numberList)


