var exec = require('child_process').exec;

/**
 * Call python script
 */
exports.callPythonScript = function(req, res) {

    console.log("call python script...");

    exec("python service/example.py", function(error, stdout, stderr) {
        res.send(stdout);
    });

}
