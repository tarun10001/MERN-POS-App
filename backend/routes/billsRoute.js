const express = require('express');
const BillModel = require('../models/billModel')

const router = express.Router();


router.post('/charge-bill', async (req, res) => {
    try {
        const newbill = new BillModel(req.body)
        await newbill.save()
        res.send("Bill Charged Successfully")
    }
    catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router;