'use strict'

const Lab = require('lab')
const Code = require('code')

const lab = exports.lab = Lab.script()
const test = lab.test
const before = lab.before
const expect = Code.expect


test('get random tip', (done) => {

  const sut = require('./forse.js')()

  sut.random((err, responseBody)=>{
    if(err) return done(err)

    expect(responseBody).to.exists()
    console.log(responseBody)

    done()
  })
})

test('get random tip with custom headers', (done) => {

  const sut = require('./forse.js')({userAgent:'forse-un-altro-user-agent'})

  sut.random((err, responseBody)=>{
    if(err) return done(err)

    expect(responseBody).to.exists()
    console.log(responseBody)

    done()
  })
})
