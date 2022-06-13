const mongoose = require("mongoose");



const users = new mongoose.Schema({
  
_id: mongoose.Schema.Types.ObjectId,
id:{ type: String , required: true },
isBuy:{ type: Boolean, default: false },

});

module.exports = mongoose.model('Users', users, 'users')
