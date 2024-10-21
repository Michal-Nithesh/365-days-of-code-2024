function getSayValue(n) {
    const streaks = [];
    let i = 0;
    while (i < n.length) {
        let char = n[i];
        let count = 0;
        while (i < n.length && n[i] === char) {
            i++;
            count++;
        }
        streaks.push([count, +char]);
    }
    return streaks;
}

module.exports = {
    //param A : integer
    //return a strings
    countAndSay: function (A) {
        // each number => read streaks => multiplier, digit => join all to make new string
        // continue
        let output = "1";
        for (let i = 0; i < A - 1; i++) {
            output = getSayValue(output).flat().join("");
        }
        return output;
    }
};
