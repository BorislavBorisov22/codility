
function solution(numbers) {
    const occurences = {};
    numbers.forEach(n => {
        occurences[n] = occurences[n] ? occurences[n] + 1 : 1;
    });

    const single = Object.keys(occurences).find((key) => occurences[key] % 2 !== 0);
    return +single;
}
