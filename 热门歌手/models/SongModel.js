const HTTP = require('./HTTP');
class SongModel extends HTTP{
    static getSong(id){
        return this.request({
            url:"artists",
            data:{
                id
            }
        })
    }
}
module.exports = SongModel