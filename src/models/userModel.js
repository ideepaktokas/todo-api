import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(! validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    pass: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: 3,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain password')
            }
        }
    },
}, {
    timestamps: true
})

// // Virtual field for relation
// userSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner'
// })

// //userSchema.methods.getPublicProfile = function (){
// userSchema.methods.toJSON = function (){
//     const user = this
//     const userObject = user.toObject()

//     delete userObject.password
//     delete userObject.tokens
//     delete userObject.avatar

//     return userObject
// }

// userSchema.methods.generateAuthToken = async function (){
//     const user = this
//     const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET, {expiresIn: '2 days'})

//     // Here we are saving the token to the user account
//     user.tokens = user.tokens.concat({token})
//     await user.save()

//     return token
// }

// userSchema.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({email})

//     if(!user) {
//         throw new Error('Unable to login')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch) {
//         throw new Error('Unable to login')
//     }

//     return user
// }

// // Hash the plan text password before saving
// userSchema.pre('save', async function(next) {
//     const user = this

//     //we need to save the plain pass to
//     user.pass = user.password

//     // Hashing the password if user changed it
//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password, 8)
//     }
    
//     next()
// })

// // Delete user tasks when user is removed
// userSchema.pre('remove', async function (next) {
//     const user = this
//     await Task.deleteMany({owner: user._id})
//     next()
// })

export default  mongoose.model('User', userSchema)