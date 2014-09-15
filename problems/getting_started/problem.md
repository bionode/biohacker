# Getting started

If the **bionode** you need isn't available yet on your command line, you need to install it
with NPM. For example, for **bionode-ncbi** do:

```
npm install bionode-ncbi -g
```

Other useful modules you should install are **tool-stream**, which provides
useful methods to manipulate Stream of objects, and **json** which indents a one
line JSON object to make it more human readable.

Try the following

```
bionode-ncbi search assembly acromyrmex
bionode-ncbi search assembly acromyrmex | json
bionode-ncbi search assembly acromyrmex | tool-stream extractProperty biosource | json
```

During this workshop, you'll verify your solution by piping into **biohacker verify**.
To check that you have everything installed correctly, try piping the last command to it.
