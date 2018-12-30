const test = require('test')
test.setup()

require('./integration/message')

test.run(console.DEBUG)
process.exit()