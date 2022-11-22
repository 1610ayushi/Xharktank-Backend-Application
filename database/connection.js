const mongoose = require('mongoose');

module.exports =  async () => {
    mongoose.connect("mongodb://localhost:27017/xharktank");
}