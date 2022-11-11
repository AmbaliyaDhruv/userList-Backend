const mongoose = require('mongoose')

const userListsSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true }
}, {
    timestamps: false
});

const UserLists=mongoose.model('userLists',userListsSchema);
module.exports=UserLists;