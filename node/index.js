import { createServer } from 'node:http'

const hostname = '0.0.0.0'
const port = 3000

createServer((req, res) => {
  debugger
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Yeah\n')
}).listen(3000, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
