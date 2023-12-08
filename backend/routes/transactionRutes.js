const { Router } = require("express");
const { addTransaction, getTransaction } = require("../controller/transactionController");

const router = Router();

router.route("/transaction").get(getTransaction);
router.route("/").post(addTransaction);

module.exports = router;
