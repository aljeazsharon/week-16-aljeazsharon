const { Recipes } = require ("../model/RecipesMongo");
const { ObjectId } = require ("mongodb");

exports.createRecipes = async (req, res) => {
    const {recipesName, recipesDesc} = req.body;
    const recipes = await Recipes.create({recipesName, recipesDesc});
    recipes.recipeDev = req.user;
    await recipes.save();
    res.status(201).json(recipes);
}

exports.getRecipes = async (req, res) => {
    let query = {recipeDev: req.user};
    if (req.user.is_superuser()) {
        query = {};
    };
    
    const recipes = await Recipes.find(query).populate("recipeDev");
    res.status(200).json(recipes);
}

exports.updateRecipes = async (req, res) => {
    const {recipesName, recipesDesc} = req.body;
    const {id} = req.params;
    let query = {recipeDev: req.user};
    const filter = await Recipes.findOne({ _id: new ObjectId(id) }).populate("recipeDev");

    if(filter) {
        const updates = await Recipes.updateOne({recipesName, recipesDesc});
        res.status(201).json(updates);
    }
    else {
        res.status(401).json({
            error: "Update Data Error!"
        });
        return;
    }
};

exports.deleteRecipes = async (req, res) => {
    const {id} = req.params;
    let query = {recipeDev: req.user};
    const filter = await Recipes.findOne({ _id: new ObjectId(id) }).populate("recipeDev");
    if(filter) {
        const delRecipes = await Recipes.deleteOne({_id: new ObjectId(id) }).populate;("recipeDev");
        res.status(201).json(delRecipes);
    }
    else {
        res.status(401).json({
            error: "Delete Data Error!"
        });
        return;
    }
};