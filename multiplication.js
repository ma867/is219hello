class multiplication{

    static multiply(a = null, b = null) {
        let result = 0;
        result = a * b;
        return result;
    }
}
module.exports = multiplication; //exports sum out of the local scop makes it global so that test can see it.