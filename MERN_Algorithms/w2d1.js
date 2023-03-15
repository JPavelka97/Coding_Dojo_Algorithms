function orderedIntersection(sortedA, sortedB) {
    let tempArr = [];
    for (let i = 0; i < sortedA.length; i++) {
        for (let j = 0; j < sortedB.length; j++) {
            // console.log(j , i)
            if (sortedA[i] === sortedB[j] && !(tempArr.includes(sortedB[j]))) {
                tempArr.push(sortedA[i])
            }
        }
    }
    return tempArr;
}
console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))