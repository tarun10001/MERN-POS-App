const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    image: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    brand: {
        type: String,
        required:true
    }
});

const itemsModel = mongoose.model('items', itemsSchema);

module.exports = itemsModel;