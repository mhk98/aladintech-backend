const db = require("../../models");
const sequelize = db.sequelize;
const Product = db.product;

// insert Question informatio using post request

module.exports.insertProduct = async (req, res, file) => {
  try {
    const {
      model,
      rating,
      price,
      keyFeature1,
      keyFeature2,
      keyFeature3,
      keyFeature4,
    } = req.body;

    
    let keyFeature = [];
    keyFeature.push(keyFeature1, keyFeature2, keyFeature3, keyFeature4);

    console.log("keyFeature", keyFeature);
    const result = await Product.create({
      model: model,
      rating: rating,
      price: price,
      keyFeature: keyFeature,
      Img: req.file.path,
    });
    if (!result) {
      return res.send("Result not found");
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully product information insert",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: "Product information not found",
      error: error.message,
    });
  }
};

//Get all Question information using get request
module.exports.getAllProduct = async (req, res) => {
  try {
    const result = await Product.findAll();

    if (!result) {
      return res.send("Result not found");
    }
    res.status(200).send({
      status: "Success",
      message: "All product information",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Product information not found",
      error: error.message,
    });
  }
};

//Question information delete
module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    // const { educationId } = req.params;
    console.log("Product Id here", req.params);

    if (!id) {
      return res.send("Id not found");
    }
    const result = await Product.destroy({ where: { productId: id } });

    console.log("Product_information_delete", req.body);
    if (!result) {
      return res.send("Result not found");
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully product information delete",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "No product found",
      error: error.message,
    });
  }
};

// Search specific Question

// module.exports.getQuestion = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Questions.findAll({ where: { Question_Id: id } });

//     if (!result) {
//       return res.send("Result not found");
//     }
//     res.status(200).send({
//       status: "Success",
//       message: "All Question information",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).send({
//       status: "fail",
//       message: "Question information not found",
//       error: error.message,
//     });
//   }
// };
