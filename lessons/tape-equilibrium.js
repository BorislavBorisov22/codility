
function solution(A) {
    let leftSum = 0;
    let rightSum = 0;
    let totalSum = 0;
    let lastMin, currentMin;

    for (let i = 0; i < A.length; i++) {
        totalSum += A[i];
    }

    lastMin = +Infinity;

    for (let i = 1; i < A.length; i++) {
        leftSum += A[i - 1];
        rightSum = totalSum - leftSum;
        currentMin = Math.abs(leftSum - rightSum);
        lastMin = Math.min(lastMin, currentMin);
    }

    return lastMin;
}


console.log(solution([3, 1]));
