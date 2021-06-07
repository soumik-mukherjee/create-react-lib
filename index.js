#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');
const config = require('./config');
const yargs = require('yargs');

const tmpdir = 'tmp';
const scriptName = 'create-react-lib';

// What CLI commands/options are we going to support? 
// Options:
//     1. --target-registry {npm|github} default 'npm'
//     2. --private {true|false} default false
//     3. --org {any string beginning with @} default undefined, i.e. no org
// 

// const [,, libName, ...rest] = process.argv

const argv = require('yargs/yargs')(process.argv.slice(2))
    .command('$0 <lib-name>', 'creates a new library project')
    .alias('r', 'target-registry')
    .nargs('r', 1)
    .describe('r', 'The target registry to use with publish')
    .choices('r', ['npm', 'github'])
    .default('r', 'npm', 'The NPM public registry')
    .boolean('p')
    .alias('p', 'private')
    .nargs('p', 1)
    .describe('p', 'Create a private package?')
    .default('p', false, 'A public package')
    .boolean('no-org')
    .nargs('no-org', 1)
    .describe('no-org', 'Flag to enable publishing to org prefixed registry repo. If true, --org will be ignored')
    .default('no-org', true, 'true, i.e. don\'t use an org to publish')
    .help()
    .alias('o', 'org')
    .nargs('o', 1)
    .describe('o', 'The org name to use with publish, if --no-org is set to "false"')
    .help()
    .argv

  console.log(argv)

/*
  if (typeof(libName) === 'undefined')
    throw new Error("must pass a name for your library to this command")
}
else{
    console.log(libName)
}



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
*/
