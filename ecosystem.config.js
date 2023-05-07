const path = require("node:path")

module.exports = {
    apps: [{
        name: "example-template",
        namespace: "EXAMPLE-TEMPLATE",
        script: "build/main.js",
        node_args: "--harmony",
        log_file: `${path.resolve()}/.logs/http-server.log`,
        out_file: `${path.resolve()}/.logs/http-server-out.log`,
        error_file: `${path.resolve()}/.logs/http-server-error.log`,
        log_date_format: "YYYY-MM-DD HH:mm:ss Z",
        interpreter: "node@18.13.0",
        autorestart: true
    }]
}