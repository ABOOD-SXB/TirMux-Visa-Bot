const mongoose = require("mongoose")



module.exports.init = () => {
const dbOptions = {
useNewUrlParser: true,
useUnifiedTopology: true,
autoIndex: false,
reconnectTries: Infinity,
reconnectInterval: 500,
poolSize: 5,
connectTimeoutMS: 10000,
family: 4
};

mongoose.connect("mongodb+srv://VaDox:Abdullah135@cluster0.nxzpi.mongodb.net/data", dbOptions)
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () =>{
console.log('Mongoose has successfully connected!')
});

mongoose.connection.on('err', err => {
console.error(`Mongoose connection error: \n${err.stack}`)
});

mongoose.connection.on('disconnected', () =>{
console.warn('Mongoose connection lost')
});
}