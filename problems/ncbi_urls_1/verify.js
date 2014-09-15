module.exports = function(args, t) {
  var result = []
  var solution = [
    "http://ftp.ncbi.nlm.nih.gov/genomes/all/GCA_000204515.1_Aech_3.9/GCA_000204515.1_Aech_3.9_genomic.fna.gz\n"
  ]
  process.stdin.on('data', gotData)
  function gotData(data) { result.push(data.toString()) }
  process.stdin.on('end', check)
  function check() {
    t.deepEqual(result, solution)
    t.end()
  }
}
