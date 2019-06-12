const server = require('./server')
const port = 3000
const ip = '0.0.0.0' // localhost

server.listen(port, ip || process.env.PORT, () => {
  console.log(`Server em execução em http://${ip}:${port}`)
})
