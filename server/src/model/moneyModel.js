const mongoose = require('mongoose');

const MoneySchema = new mongoose.Schema({
    INR : {
        type: Number,
        required : true
    },
    senderName :{
        type: String,
        required: true,
        trim: true
    },
    receiverName :{
        type: String,
        required: true,
        trim: true
    },
    purpose: [{
        type: String,
        enum :["business", "health", "tour", "study"],
        required: true
    }]
    
}, { timestamps: true });


module.exports = mongoose.model("Money", MoneySchema)