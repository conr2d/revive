const soljson = require('solc/soljson');
const createRevive = require('./dist/revive-cjs/resolc.js');

const compilerStandardJsonInput = {
    language: 'Solidity',
    sources: {
      'MyContract.sol': {
        content: `
          // SPDX-License-Identifier: UNLICENSED
          pragma solidity ^0.8.0;
          contract MyContract {
            function greet() public pure returns (string memory) {
              return "Hello";
            }
          }
        `,
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      outputSelection: {
        '*': {
          '*': ['abi'],
        },
      },
    },
  };

async function runCompiler() {
  const m = createRevive();
  m.soljson = soljson;

  // Set input data for stdin
  m.setStdinData(JSON.stringify(compilerStandardJsonInput));

  var stdoutString = "";
  m.setStdoutCallback(function(char) {
      if (char.charCodeAt(0) === '\n') {
        console.log("new line")
        exit
      }
      stdoutString += char;
  });

  var stderrString = "";
  m.setStderrCallback(function(char) {
    stderrString += char;
  });

  // Compile the Solidity source code
  let x = m.callMain(['--standard-json']);
  console.log("Stdout: " + stdoutString)
  console.error("Stderr: " + stderrString)
}

runCompiler().catch(err => {
  console.error('Error:', err);
});
