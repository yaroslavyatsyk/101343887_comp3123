const fs = require('fs')

const process = require('process')



var dir = __dirname + "/Logs"

if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir(dir);
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

let limit = 10

for(let i = 1; i <= limit; i++) {
    fs.appendFile(process.cwd() + "/Log" + i + ".txt", "text" + i, () => {
      console.log("Log" + i + ".txt", "text" + i)
    })
}

