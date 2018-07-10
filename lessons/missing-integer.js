function solution(arr) {
    const occurences = {};
    for (let i = 0; i < arr.length; i++) {
        occurences[arr[i]] = true;
    }

    let num = 1;
    while (occurences[num]) {
        num++;
    }
    return num;
}
