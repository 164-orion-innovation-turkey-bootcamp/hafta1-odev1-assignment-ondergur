function findIndexes(inputNums, target) {

    for (let firstNumIndex = 0; firstNumIndex < inputNums.length; firstNumIndex++) {
        let firstNum = inputNums[firstNumIndex]
        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < inputNums.length; secondNumIndex++) {
            let secondNum = inputNums[secondNumIndex]
            if (firstNum + secondNum == target) {
                return [firstNumIndex, secondNumIndex]
            }
        }
    }
}

console.log(findIndexes([2, 7, 11, 15], 9));
console.log(findIndexes([3, 2, 4], 6));
console.log(findIndexes([3, 3], 6)); 