const mongoose = require("mongoose");



const accounts = new mongoose.Schema({
  
_id: mongoose.Schema.Types.ObjectId,
guildId:{ type: String , required: true },
addedById:{ type: String, required: true },

email:{ type: String, required: true },
//password:{ type: String, required: true },

});

module.exports = mongoose.model('Accounts', accounts, 'accounts')
