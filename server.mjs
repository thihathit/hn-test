import { createServer } from "http"
import { handler as ssrHandler } from "./dist/server/entry.mjs"

createServer(function (req, res) {
    ssrHandler(req, res, (err) => {
        if (err) {
            res.writeHead(500)
            res.end(err.toString())
        } else {
            // Serve your static assets here maybe?
            // 404?
            res.writeHead(404)
            res.end()
        }
    })
}).listen(5000)
