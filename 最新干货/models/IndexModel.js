const HTTP = require('./HTTP');
class IndexModel extends HTTP{
    static getCat(){
        return this.request({
            url:"api/today"
        })
    }
}
module.exports = IndexModel