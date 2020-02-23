var baseUrl = "https://music.aityp.com/";
function http({url}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data: {},
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
module.exports= {
    getHot:()=>{
        return http({
            url:"top/playlist?order=hot"
        })
    },
    getJapan:()=>{
        return http({
            url:"top/playlist?cat=日语"
        })
    },
    getDj:()=>{
        return http({
            url:"personalized/djprogram"
        })
    },
    getMore:(url)=>{
        return http({
            url
        })
    },
    getDetail:(id)=>{
        return http({
            url:`playlist/detail?id=${id}`
        })
    },
    getPlay:(id)=>{
        return http({
            url:`song/url?id=${id}`
        })
    }
}