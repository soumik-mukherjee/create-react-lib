const fs = require('fs');
const { exec } = require('child_process');
const config = require('./config');

const [,, libName, ...rest] = process.argv

if (typeof(libName) === 'undefined'){
    throw new Error("must pass a name for your library to this command")
}
else{
    console.log(libName)
}

const tmpdir = 'tmp';

if (!fs.existsSync(libName)){
    fs.mkdirSync(libName);
    fs.mkdirSync(`./${libName}/${tmpdir}`);
}
else{
    throw new Error(`a directory named ${libName} already exists at the current location`)
}

exec(config.PKG_MGR_INIT_CMD, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }
  
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

