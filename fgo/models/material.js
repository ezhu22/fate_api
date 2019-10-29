const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema(
    {
    name: {type: String, required: [true, 'Must have a name.'], minlength: 2},
    image_link: {type: String, requird: [true, 'Must have an image link.'], minlength: 2},
    classification: {type: String, required: [true, 'Must have item classification'], minlength: 2},
    description: {type: String, required: [true, 'Must have item description'], minlength: 2},
    grade: {type: String, required: [true, 'Must have an item grade (Bronze, Silver or Gold)'], minlength: 2},
    number: {type: Number, required: [true, 'Must have item number']}
},
{
    timestamps: true,
});

const Material = mongoose.model('Material', MaterialSchema);
module.exports = Material;