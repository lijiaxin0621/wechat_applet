var baseUrl = "https://music.aityp.com/top/playlist?cat="
function Http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            }
        });
    })
}
module.exports = {
    getchinese:(offset)=>{
        return Http({
            url:"华语&limit=21",
            data:{
                offset
            }

        })
    },
    geteurope:(offset)=>{
        return Http({
            url:"欧美",
            data:{
                offset
            }

        })
    },getjapanese:(offset)=>{
        return Http({
            url:"日语",
            data:{
                offset
            }

        })
    },getkorean:(offset)=>{
        return Http({
            url:"韩语",
            data:{
                offset
            }

        })
    },getcantonese:(offset)=>{
        return Http({
            url:"粤语",
            data:{
                offset
            }

        })
    },

}