exports['prepare-release-artifacts runs expected commands 1'] = `
$ node ./scripts/binary/release/prepare-release-artifacts.js --dry-run --sha 57d0a85108fad6f77b39db88b8a7d8a3bfdb51a2 --version 1.2.3
🏗 Preparing Release Artifacts
🏗 Running \`move-binaries\`...
🏗 Dry run, not executing: node ./binary.js move-binaries --sha 57d0a85108fad6f77b39db88b8a7d8a3bfdb51a2 --version 1.2.3
🏗 Running \`create-stable-npm-package\`...
🏗 Dry run, not executing: ./create-stable-npm-package.sh https://cdn.cypress.io/beta/npm/1.2.3/linux-x64/develop-57d0a85108fad6f77b39db88b8a7d8a3bfdb51a2/cypress.tgz

`
