#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('biohacker')

var problems = [
  'Getting Started',
  'NCBI urls 1'
]

problems.forEach(function (prob) {
  shop.add(prob, function () { return require('./problems/' + prob.replace(/\s/ig, '_').toLowerCase()) })
})

shop.execute(process.argv.slice(2))
