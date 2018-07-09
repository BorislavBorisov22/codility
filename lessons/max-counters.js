

function solution(n, operations) {
    let counters = [];

    let increaseAll = 0;
    let max = 0;
    operations.forEach((o) => {
        const index = o - 1;
        if (index >= n) {
            counters = [];
            increaseAll += max;
            max = 0;
        } else {
            counters[index] = counters[index] ? counters[index] + 1 : 1;
            max = Math.max(counters[index], max);
        }
    });

    for (let i = 0; i < n; i++) {
        counters[i] = counters[i] ? counters[i] + increaseAll : increaseAll;
    }
    
    return counters;
}

// console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
