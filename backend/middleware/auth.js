const jwt = require("jsonwebtoken");

function auth(req, res,next) {
    const headers = req.headers["authorization"];
    if (headers) {
        const token = headers.split(" ")[1]
        if (token) {
            jwt.verify(token, "secret", (e, d) => {
                if (e) {
                    res.status(401).json({ message: e })
                } else {
                	console.log(d)
                    next()
                }
            })

        } else {
            res.status(401).json({
                message: "No token send"
            })
        }

    } else {
        res.status(401).json({
            message: "No token send"
        })
    }
}
module.exports = auth;