const mongoose = require('mongoose');
const { use } = require('../routes/user');
mongoose.connect('mongodb+srv://admin:admin@cluster0.zrkiz9r.mongodb.net/');

const AdminSchema = new mongoose.Schema({

})

const userSchema = new mongoose.Schema({

})

const courseSchema = new mongoose.Schema({

})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports ={
    Admin,
    User,
    Course
}
