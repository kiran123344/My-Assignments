"use strict";
var Environment;
(function (Environment) {
    Environment[Environment["Local"] = 0] = "Local";
    Environment[Environment["Development"] = 1] = "Development";
    Environment[Environment["Staging"] = 2] = "Staging";
    Environment[Environment["Production"] = 3] = "Production";
})(Environment || (Environment = {}));
function runTest(environment) {
    console.log("Tests are running:", environment);
}
runTest(Environment.Local);
runTest(Environment.Development);
runTest(Environment.Staging);
runTest(Environment.Production);
