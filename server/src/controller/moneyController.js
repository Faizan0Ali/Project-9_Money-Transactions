const moneyModel = require("../model/moneyModel")


const postMoney = async (req, res) => {

    try {

        let data = req.body
        const { USD, senderName, receiverName, purpose } = data

        //--------------MANDATORY-FIELDS-----------------\\
        if (!USD) {
            return res.status(400).send({ status: false, msg: "USD is Mandatory" })
        }
        if (!senderName) {
            return res.status(400).send({ status: false, msg: "senderName is Mandatory" })
        }
        if (!receiverName) {
            return res.status(400).send({ status: false, msg: "receiverName is Mandatory" })
        }
        if (!purpose) {
            return res.status(400).send({ status: false, msg: "purpose is Mandatory" })
        }

        //--------------VALIDATION-FIELDS-----------------\\
        if (typeof USD !== "number") {
            return res.status(400).send({ status: false, msg: "USD should be in digits" })
        }
        if (typeof senderName !== "string") {
            return res.status(400).send({ status: false, msg: "senderName should be in string" })
        }
        if (typeof receiverName !== "string") {
            return res.status(400).send({ status: false, msg: "receiverName should be in string" })
        }

        let _enum = ["business", "health", "tour", "study"]
        if (!_enum.includes(purpose)) {
            return res.status(400).send({ status: false, message: `purpose Must be of these values only : ${_enum} ` })
        }

        let INR = USD * 80
        const saveData = {
            INR: INR,
            senderName: senderName,
            receiverName: receiverName,
            purpose: purpose
        }
        const createData = await moneyModel.create(saveData)
        res.status(201).send({ status: true, data: createData })

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: error.message })
    }
}
const getAllRecords = async (req, res) => {

    try {

        const findData = await moneyModel.find()
        
        if (!findData){
           return res.status(404).send({ status: false, msg: "No Data exist" })
        } 

        res.status(200).send({ status: true, data: findData })
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: error.message })

    }
}
module.exports = { postMoney, getAllRecords }