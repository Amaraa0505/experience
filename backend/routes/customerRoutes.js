const { Router } = require("express");
const { addCustomer, getCustomer } = require("../controller/customerController");

const router = Router();

router.route("/customers").post(addCustomer);
router.route("/customers").get(getCustomer);

module.exports = router;
