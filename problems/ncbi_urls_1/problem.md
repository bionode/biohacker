# NCBI urls 1

You can get the FTP urls for datasets stored in NCBI SRA or assembly databases.

For example, try doing

```
bionode-ncbi urls assembly formicidae
```

This will print a JSON object per line for each result. You can limit the number
of results to one with **--limit 1** or **-l 1**, and pipe to the Node.js module
**json** to get a pretty-print.

```
bionode-ncbi urls assembly formicidae --limit 1 | json
```

Using **tool-stream**, you can extract only the property you're interested in
and build a list of FTP urls.

```
bionode-ncbi urls assembly formicidae | tool-stream extractProperty genomic.gff
```

**[Bionode-ncbi docs](https://github.com/bionode/bionode-ncbi#usage)**.
**[tool-stream docs](https://github.com/bmpvieira/tool-stream#usage)**.

**To pass this challenge:**

Get the FTP url for the genomic FASTA file of Acromyrmex and pipe it into
biohacker verify. You can use tool-stream or any other tool to extract the URL.
It should be something like:

```
bionode command | tool-stream command | biohacker verify
```
