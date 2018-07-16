
function solution(cars) {
    let result = 0;
    let multiplier = 0;
    
    for (let i = 0; i < cars.length; i++) {
        const c = cars[i];
        if (c === 0) {
            multiplier++;
        } else {
            result += multiplier;
        }

        if (result > 1000000000) {
            return -1;
        }
    }

    //console.log(result, 'result');
    return result;
}

solution([0, 1, 0, 1, 1]);
