'use strict'

const myping = require('ping')

module.exports = {
  ping: function (host) {
    return new Promise((resolve, reject) => {
      myping.promise.probe(host, {
        timeout: 10,
        extra: ['-c 3']
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}
