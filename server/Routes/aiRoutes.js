const express = require("express")
const router = express.Router()

const {explain} = require("../Controllers/aiController")

router.post("/explain",explain)

module.exports = router