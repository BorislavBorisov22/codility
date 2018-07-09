function solution(N) {
    let gapStarted = false;
    let bestGap = 0;
    let currentGap = 0;
    for (let i = 0; i < 32; i++) {
        const bit = (N & (1 << i)) === 0 ? 0 : 1;
        if (bit === 1 && gapStarted) {
            bestGap = Math.max(currentGap, bestGap);
            currentGap = 0;
        } else if (bit === 1 && !gapStarted) {
            gapStarted = true;
        } else if (gapStarted) {
            currentGap++;
        }
    }

    return bestGap;
}

// solution(9);
// solution(529);
// solution(15);
// solution( 32 );
// solution(328);
