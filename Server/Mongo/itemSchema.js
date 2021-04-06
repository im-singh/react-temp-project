const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    class: { type: String }
}, {
    timestamps: true
})

const ItemModel = mongoose.model("items", ItemSchema);

module.exports = ItemModel;