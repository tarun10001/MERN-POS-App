const express = require('express');
const ItemModel = require('../models/itemsModel')

const router = express.Router();

router.get('/get-all-items', async (req, res) => {
    try {
        const items = await ItemModel.find()
        res.json(items)
    }
    catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;