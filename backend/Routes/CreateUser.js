const express = require("express")
const router = express.Router()
const user = require("../models/User")

router.post("/createuser", async (req, res) => {
  try {
    await user.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location
    })
    res.json({ success: true })
  } catch (err) {
    console.log(err)
    res.json({ success: false })

  }
})
module.exports = router;