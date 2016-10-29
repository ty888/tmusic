export default {
  // 获取音乐列表
  getMusicList (http, Keyword, size = 1, cb) {
    http.get('query?s=' + Keyword + '&size=' + size, {
      headers: {
        apikey: 'f8301c2da902f4bab58738b76f11dd30'
      }
    }).then((res) => {
      // 成功回调
      let data
      try {
        data = JSON.parse(res.data)
      } catch (e) {
        data = res.data
      }
      if (cb) cb(true, data)
    }, (res) => {
      // 失败回调
      if (cb) cb(false, res.data)
    })
  },
  // 获取歌曲信息
  getMusicInfo (http, hash, cb) {
    http.get('playinfo?hash=' + hash, {
      headers: {
        apikey: 'f8301c2da902f4bab58738b76f11dd30'
      }
    }).then((res) => {
      // 成功回调
      let data
      try {
        data = JSON.parse(res.data)
      } catch (e) {
        data = res.data
      }
      if (cb) cb(true, data)
    }, (res) => {
      // 失败回调
      if (cb) cb(false, res.data)
    })
  },
  // 获取歌手信息
  getsinger (http, name, cb) {
    http.get('singer?name=' + name, {
      headers: {
        apikey: 'f8301c2da902f4bab58738b76f11dd30'
      }
    }).then((res) => {
      // 成功回调
      let data
      try {
        data = JSON.parse(res.data)
      } catch (e) {
        data = res.data
      }
      if (cb) cb(true, data)
    }, (res) => {
      // 失败回调
      if (cb) cb(false, res.data)
    })
  }
}
