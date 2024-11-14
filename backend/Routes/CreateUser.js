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
router.post("/loginUser", async (req, res) => {
  let email = req.body.email
  try {
    let userData = await user.findOne({ email })
    if (!userData) {
      return res.status(400).json({ error: "try correct email" });
    }
    if (userData.password !== req.body.password) {
      return res.status(400).json({ error: "try correct password" });
    }
    return res.status(200).json({ success: true, userData });
  } catch (err) {
    console.log(err)
    res.json({ success: false })
  }
})

module.exports = router;