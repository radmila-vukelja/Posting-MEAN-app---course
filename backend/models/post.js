const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, default: 'Post subject' },
    content: { type: String, required: true },
    imagePath: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model('Post', postSchema);
//mongoose.model(name of model you create, the schema you are using as a blueprint)
