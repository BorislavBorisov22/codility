
function numberOfMultiples(n, z) {
    return Math.floor(n / z);
}

function solution(x, y, z) {
    return numberOfMultiples(y, z) - numberOfMultiples(x - 1, z);
}
