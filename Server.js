const express = require("express")
const bodyParser = require("body-parser")
const app = express()


app.use(bodyParser.json())

app.get("/api/whoami", (req, res) => {
    const IPadress = req.ip
    const language = req.acceptsLanguages()
    const userAgent = req.get("User-Agent")
    res.json({ "ipaddress": IPadress, "language": language[0], "software": userAgent })
        //res.json("ipaddress")
})

app.listen(3000, () => {
    console.log("server is up and running at 3000")
})