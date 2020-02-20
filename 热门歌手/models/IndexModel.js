const HTTP= require("./HTTP");
class IndexModel extends HTTP{
    static getCat(){
        return this.request({
            url:"top/artists",
        })
    }
}
module.exports = IndexModel