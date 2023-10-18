const mongoose = require ("mongoose");
const { Schema, model } = require ("mongoose");

exports.Recipes = model("Recipes", new Schema({
    recipesName: {
        type: String,
        required: true,
    },

    recipesDesc: {
        type: String,
        required: true,
    },

    recipeDev: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}));