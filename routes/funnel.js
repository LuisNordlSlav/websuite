const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render('funnel/funnel.ejs')
})

module.exports = router