var fs = require('fs')
var path = require('path')
var verify = require('adventure-verify')
var ansimd = require('ansimd')

module.exports = function(dirname) {
  var problem = {
    problem: ansimd(fs.readFileSync(dirname + '/problem.md').toString()),
    solution: ansimd(fs.readFileSync(dirname + '/solution.md').toString()),
    verify: verify({ modeReset: true }, require(dirname + '/verify'))
  }
  return problem
}
