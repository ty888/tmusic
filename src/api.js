export default {
  getMusicList (http, Keyword, size = 5, cb) {
    http.get('query?s=' + Keyword + '&size=' + size, {
      headers: {
        apikey: 'f8301c2da902f4bab58738b76f11dd30'
      }
    }).then((res) => {
      // 成功回调
      if (cb) cb(true, res.data)
    }, (res) => {
      // 失败回调
      if (cb) cb(false, res.data)
    })
  }
}
