const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: String,
    originalName: String,
    filePath: String,
    size: Number,
    mimetype: String,
    uploadDate: { type: Date, default: Date.now },
  });
  const File = mongoose.model('File', fileSchema);
  
  module.exports=File