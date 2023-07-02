const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const registerSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    phone: {
        type: Number,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    cpassword: {
        type: String,
        require: true
    }

})

registerSchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }

    next();

})


const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
