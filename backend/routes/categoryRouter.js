const { Router } = require("express");
const {
  addCategory,
  getCategory,
} = require("../controller/categoryController");

const router = Router();

router.route("/addCategory").post(addCategory);
router.route("/getCategory").get(getCategory);

module.exports = router;
