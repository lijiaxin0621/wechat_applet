const HTTP = require("./HTTP");
class IndexModel extends HTTP{
    static getCat(){
        return this.request({
            url:"program/recommend",
        })
    }
}
module.exports = IndexModel