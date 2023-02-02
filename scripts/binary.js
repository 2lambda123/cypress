/* eslint-disable no-console */
require('@packages/ts/register')

const command = process.argv[2]

if (!command) {
  console.error('Missing command ⛔️')
  process.exit(1)
}

const commands = require('./binary/index')
const fn = commands[command]

if (!fn) {
  console.error('Invalid command %s 🚫', command)
}

// TODO allow passing CLI arguments to each command

fn()
.then(() => {
  return console.log('✅ %s completed', command)
})
.catch((err) => {
  console.error('🔥 error')
  console.error(err)
  process.exit(1)
})
