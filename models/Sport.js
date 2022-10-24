const mongoose = require( "mongoose");
const Schema = mongoose.Schema;

const SportSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    price: {
        type: String,
        trim: true,
        required: "Price is required"
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Item"
        }
    ]
});

const Sport = mongoose.model("Sport", SportSchema);
module.exports = Sport;