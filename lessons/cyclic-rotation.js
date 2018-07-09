
function solution(numbers, K) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        result[(i + K) % numbers.length] = numbers[i];
    }

    console.log(result);
    return result;
}

solution([3, 8, 9, 7, 6], 3);
solution([1, 2, 3, 4], 4);
