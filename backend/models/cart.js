const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItem =  new Schema({
    productName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    }
},
{collection: "cartProduct"}
);

exports.cartItems = mongoose.model("cartProduct", cartItem );