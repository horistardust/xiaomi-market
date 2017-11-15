var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var produtSchema = new Schema({
  "productId":{type:String},
  "productName":String,
  "salePrice":Number,
  "checked":String,
  "productNum":Number,
  "productImage":String
});
var Good =  mongoose.model('Good',produtSchema,'good');
module.exports = Good;