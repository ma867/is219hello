class division {
    static divide(a = null, b = null) {
        let result = 0;
        result = a / b;
        return result;
    }
}
module.exports = division; //exports sum out of the local scop makes it global so that test can see it.