const recipesController = require("../controller/recipesController");
const permission = require("../permission");
const {Router} = require("express");
const router = Router();

router.post("", permission.is_authenticated, recipesController.createRecipes);
router.get("", permission.is_authenticated, recipesController.getRecipes);
router.put("/:id", permission.is_authenticated, recipesController.updateRecipes);
router.delete("/:id", permission.is_authenticated, recipesController.deleteRecipes);

module.exports = router;