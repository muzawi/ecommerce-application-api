const Product = require('../models/product');

class ProductRepository {
  async createProduct(data) {
    const product = new Product(data);
    return product.save();
  }

  async getProducts() {
    return Product.find().populate('category').populate('brand');
  }

  async getProductById(id) {
    return Product.findById(id);
  }

  async updateProduct(id, data) {
    return Product.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProduct(id) {
    return Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductRepository();
