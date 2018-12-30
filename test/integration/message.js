const test = require('test')
test.setup()

const ws = require('ws')
const http = require('http')

const frpc = require('fib-rpc')
const detectPort = require('@fibjs/detect-port')

const WSIM = require('../../')

describe('message request/response', () => {
    it('connection', () => {
        const payload = {
            id: Date.now(),
            method: 'message#connect',
            params: {
                uid: '123456789'
            }
        }

        const js_remote = frpc.open_handler({
            'test': params => params,
            'message#connect': () => 'ok'
        })

        const port = detectPort()
        const srv = new http.Server(port, ws.upgrade(js_remote))
        srv.asyncRun()

        remoting = frpc.open_connect(`ws://127.0.0.1:${port}`)
        assert.deepEqual(
            remoting['test'](payload.params),
            payload.params
        )
        assert.equal(
            remoting['message#connect'](),
            'ok'
        )

        srv.stop()
    })
})

if (require.main === module) {
    test.run(console.DEBUG)
    process.exit()
}