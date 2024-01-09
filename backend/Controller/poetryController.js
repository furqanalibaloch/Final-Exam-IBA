const  Poetry = require ('../Module/poetryModule')

const catchAsyncErrors = require('../middlewear/catchAsyncErrors')

exports.createPoetry = catchAsyncErrors(async (req, res) => {

    const createPoetry = await Poetry.create(req.body);
    res.status(201).json({ success: true, createPoetry });
});

exports.getAllPoetry = catchAsyncErrors(async (req, res) => {
    const poetry = await Poetry.find();
    res.status(200).json({ success: true, poetry });
});





