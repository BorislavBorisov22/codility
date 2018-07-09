
function solution(numbers) {
    const availableNumbers = {};
    numbers.forEach(n => availableNumbers[n] = true);

    for (let i = 1; i <= numbers.length + 1; i++) {
        if (!availableNumbers[i]) {
            return i;
        }
    }

    return null;
}
