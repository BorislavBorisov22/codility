function solution(S, P, Q) {
    const values = {
        A: 0,
        C: 1,
        G: 2,
        T: 3
    };

    const arr = Array.from({length: S.length}, () => [0, 0, 0, 0]);
    for (let i = 0; i < S.length; i++) {
        if (i === 0) {
            arr[i][values[S[i]]] = 1;
        } else {
            arr[i][0] = arr[i - 1][0];
            arr[i][1] = arr[i - 1][1];
            arr[i][2] = arr[i - 1][2];
            arr[i][3] = arr[i - 1][3];

            arr[i][values[S[i]]] += 1;
        }
    }

    const results = [];
    P.forEach((start, index) => {
        const end = Q[index];
        for (let i = 0; i < 4; i++) {
            if (start === 0) {
                if (arr[end][i] > 0) {
                    results.push(i + 1);
                    break;
                }
            } else if (arr[end][i] - arr[start - 1][i] > 0) {
                results.push(i + 1);
                break;
            }
        }
    });

    console.log(results);
    return results;
}

solution('CAGCCTA', [2, 5, 0], [4, 5, 6]);
