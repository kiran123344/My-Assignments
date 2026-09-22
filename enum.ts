enum Environment {
    Local,
    Development,
    Staging,
    Production
}

function runTest(environment: Environment): void {
    console.log("Tests are running:", environment);
}

runTest(Environment.Local);
runTest(Environment.Development);
runTest(Environment.Staging);
runTest(Environment.Production);
