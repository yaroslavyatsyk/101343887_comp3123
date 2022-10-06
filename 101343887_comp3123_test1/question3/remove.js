

const fs = require('fs');
const path = require('path');
const directory = "./question3/Logs"


console.log(directory)

fs.readdir(directory, (error, files) => {
  if (error) throw error;

  for (const file of files) {

    fs.unlink(path.join(directory, file), error => {
      if (error) throw error;

      console.log(file + " deleted")
    });
  }
})
if (fs.existsSync(directory)) {
  fs.rmdirSync(directory, {recursive: true})
}
