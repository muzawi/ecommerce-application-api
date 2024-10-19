const Category = require('../models/product');

class CategoryRepository {
  async createCategory(data) {
    const category = new Category(data);
    return category.save();
  }

  async getCategories() {
    return Category.find();
  }

  async getCategoryById(id) {
    return Category.findById(id);
  }

  async updateCategory(id, data) {
    return Category.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteCategory(id) {
    return Category.findByIdAndDelete(id);
  }
}

module.exports = new CategoryRepository();
