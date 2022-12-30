const express = require("express")
const router = express.Router();

const {postMoney, getAllRecords} = require('../controller/moneyController')


router.post("/postMoney", postMoney )

router.get("/getAllRecords", getAllRecords)

//API for wrong route-Of-API
router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "The api you request is not available"
    })
})

module.exports = router;