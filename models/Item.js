const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Item is required."
    },
    size: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        trim: true,
        required: "Price is required"
    }
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item; 