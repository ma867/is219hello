class squaring {
    static square(a = null) {
        let result = 0;
        result = a * a  ;
        return result;
    }
}
module.exports = squaring; //exports sum out of the local scop makes it global so that test can see it.