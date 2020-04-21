const express = require("express");

function setupHandlers(app) {

    app.get("/my-http-route", (req, res) => {
        res.json({
            result: 5,
        });
    });
}

function startHttpServer() {
    return new Promise(resolve => { // Wrap in a promise so we can be notified when the server has started.
        const app = express();
        setupHandlers(app);

        const port = process.env.PORT && parseInt(process.env.PORT) || 3000;
        app.listen(port, () => {
            resolve();
        });
    });
}

module.exports = {
    startHttpServer,
};