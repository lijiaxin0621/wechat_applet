const HTTP = require('../models/HTTP');
class WorksModel extends HTTP{
    static getWorks(id){
        return this.request({
            url:"artist/album",
            data:{
                id
            }
        })
    }
}
module.exports= WorksModel