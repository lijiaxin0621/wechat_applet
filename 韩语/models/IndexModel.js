const HTTP = require("./HTTP")
class IndexModel extends HTTP{
    static getCat(){
        return this.request({
            url:"top/playlist",
            data:{
                cat:"韩语"
            }
        })
    }
}
module.exports = IndexModel;