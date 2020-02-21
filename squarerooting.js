class squarerooting {
    static squareRoot(a = null) {
        let result = 0;
        result = Math.sqrt(a) ;
        return result;
    }
}
module.exports = squarerooting; //exports sum out of the local scop makes it global so that test can see it.