
function solution(x, y, d) {
    const totalDistance = y - x;
    if (x === y) {
        return 0;
    }
    if (d >= totalDistance) {
        return 1;
    }
    return parseInt(totalDistance / d) + (totalDistance % d !== 0 ? 1 : 0);
}

console.log(solution(10, 85, 30));
