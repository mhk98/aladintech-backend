const router = require("express").Router();
const user = require("./users");
const product = require("./products");

router.use("/user", user);
router.use("/product", product);

module.exports = router;
