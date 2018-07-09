
function solution(A) {
    const occurences = {};

    for (let i = 0; i < A.length; i++) {
        occurences[A[i]] = occurences[A[i]] ? occurences[A[i]] + 1 : 1;
    }

    for (let i = 1; i <= A.length; i++) {
        if (occurences[i] !== 1) {
            return 0;
        }
    }

    return 1;
}

solution([4, 1, 3, 2]);
