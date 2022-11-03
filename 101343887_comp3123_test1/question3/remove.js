

const { error } = require('console');
const fs = require('fs');
const path = require('path');
const directory = __dirname + "/Logs"


console.log(directory)

fs.readdir(directory, (error, files) => {
  if (error) {throw error;}

  for (const file of files) {

    fs.unlink(path.join(directory, file), error => {
      if (error) { throw error; }

      else {

      console.log(file + " deleted")
      }
    });
  }
})
if (fs.existsSync(directory)) {
  fs.rm(directory, { force: true, recursive: true}, function(error) {
    console.log(error.message)
  })
}
