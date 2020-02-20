const HTTP = require("./HTTP");
class DetailModel extends HTTP{
    static getSong(id){
        return this.request({
            url:"dj/program/detail",
            data:{
                id
            }
        })
    }
    static getPlay(id){
        return this.request({
            url:"song/url",
            data:{
                id
            }
        })
    }
}
module.exports = DetailModel
