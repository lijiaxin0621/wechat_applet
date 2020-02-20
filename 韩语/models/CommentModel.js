const HTTP = require('./HTTP')
class CommentModel extends HTTP{
    static getComment(id){
        return this.request({
            url:"comment/music",
            data:{
                id
            }
        })
    }
}
module.exports = CommentModel