const post = (model) => async (req, res) => {
    const item = await model.create(req.body);

    res.status(201).json({ item });
}

const getAll = (model) => async (req, res) => {
    const item = await model.find().lean().exec();

    res.status(200).json({item})
}

const getOne = (model) => async (req, res) => {
    const item = await model.findById(req.params.id).lean().exec();

    res.status(200).json({ item });
}

const updateOne = (model) => async (req, res) => {
    const item = await model.findByIdAndUpdate(req.aprams.id, req.body, { new: true });

    res.status(201).json({ item });
}

const deleteOne = (model) => async (req, res) => {
    const item = await model.findByIdAndDelete(req.params.id)

    res.status(200).json({ item });
}

module.exports = {
    post,
    getAll,
    getOne,
    updateOne,
    deleteOne,
};