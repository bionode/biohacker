module.exports = function(args, t) {
  var result = []
  var solution = [
    '{\n  "infraspecieslist": [],\n  "sex": "male",\n  "isolate": ""\n}',
    '\n'
  ]
  process.stdin.on('data', gotData)
  function gotData(data) { result.push(data.toString()) }
  process.stdin.on('end', check)
  function check() {
    t.deepEqual(result, solution)
    t.end()
  }
}
