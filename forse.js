'use strict'

const req = require('request')

function forse (obj) {
  const httpRequest = {
    headers: {
      'User-Agent': (obj && obj.userAgent) || 'forse-nodejs-module',
      'Content-Type': 'application/json'
    }
  }

  const moduleInterface = {
    random: randomTip
  }

  return moduleInterface

  function randomTip (cb) {
    httpRequest.url = 'http://forse.herokuapp.com/api/tips/random'

    req(httpRequest, (err, response, responseBody) => {
      if (err || response.statusCode !== 200) return cb(err)

      return cb(null, JSON.parse(responseBody))
    })
  }
}

module.exports = forse
