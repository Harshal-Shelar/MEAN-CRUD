
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModelSchema = new Schema({
    email: { type: String, unique: true },
    firstName: String,
    lastName: String,
    address: String,
    instrument: String,
    phoneNumber: Number,
    profileImg: String,
}, {
    timestamps: true
});
// Compile model from schema
const userModel = mongoose.model('user', userModelSchema);
module.exports = userModel;