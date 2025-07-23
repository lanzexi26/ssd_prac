// vuln.js
const { exec } = require("child_process");

function runCmd(cmd) {
  // ← unsanitized user input to exec = command injection
  exec(cmd, (err, stdout, stderr) => {
    console.log(stdout);
  });
}

// simulate passing user input in
runCmd(process.argv[2]);
