
function solution(x, a) {
    let total = 0;
    const visited = {};
    for (let i = 1; i <= x; i++) {
        total += i;
    }

    let max = -Infinity;
    for (let i = 0; i < a.length; i++) {
        if (!visited[a[i]]) {
            visited[a[i]] = true;
            total -= a[i];
            max = Math.max(max, i);
        }
    }

    if (total === 0) {
        return max;
    }

    return -1;
}

solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
