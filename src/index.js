module.exports = function reverse (n) {
    n = Math.abs(n);
    let str = String(n);
    //console.log(str);
    //console.log(typeof str);
    let res = "";
    for (let i = 0; i < str.length; i += 1) {
        //console.log(str[i]);
        res = str[i] + res;
        //console.log(res);
    }
    return Number(res);
}
