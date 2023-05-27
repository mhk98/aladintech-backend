const router = require("express").Router();
const product = require("../../controllers/products/products.controller");
const { upload } = require("../../middlewares/upload");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");
// const recharge = require('../../models/recharge/recharge');

// router.post('/', user.userInsert);
// router.get('/cards/id', User.getCardByUserId);
// router.post('/', user.create);
// router.get('/', user.findAll);

router.post("/", upload, product.insertProduct);
router.get("/", product.getAllProduct);
router.delete("/:id", product.deleteProduct);

module.exports = router;
