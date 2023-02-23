const jwt = require("jsonwebtoken");

class AuthController {
    static login(req, res) {
        if (req.body.username == "admin" && req.body.password == "123") {
            res.status(200).json({
                message: "Login berhasil",
                token: jwt.sign({ username: "admin" }, "secret")
            })
        } else {
            res.status(401).json({ message: "Login failed" })
        }
    }
    static verify(req, res) {
        const headers = req.headers["authorization"];
        if (headers) {
            const token = headers.split(" ")[1]
            if (token) {
                jwt.verify(token, "secret", (e, d) => {
                    if (e) {
                        res.status(401).json({ message: e })
                    } else {
                        res.json({"message":"Verify berhasil"})
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
}

module.exports = AuthController;