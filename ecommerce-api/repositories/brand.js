const Brand = require('../models/product');

class BrandRepository {
  async createBrand(data) {
    const brand = new Brand(data);
    return brand.save();
  }

  async getBrands() {
    return Brand.find();
  }

  async getBrandById(id) {
    return Brand.findById(id);
  }

  async updateBrand(id, data) {
    return Brand.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteBrand(id) {
    return Brand.findByIdAndDelete(id);
  }
}

module.exports = new BrandRepository();
