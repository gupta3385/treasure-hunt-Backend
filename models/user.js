import mongoose  from "mongoose";
const { Schema } = mongoose;

const userSchema  = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6, 
        max: 64,
    },
    role: {
        type: Number,
        default: 0,
    },

    score :{
        type: Number,
        default: 0,
    },

    que1: {
        type: Boolean,
        default: false,
    },
    que2: {
        type: Boolean,
        default: false,
    },
    que3: {
        type: Boolean,
        default: false,
    },
    que4: {
        type: Boolean,
        default: false,
    },
    que5: {
        type: Boolean,
        default: false,
    },
    que6: {
        type: Boolean,
        default: false,
    },
    que7: {
        type: Boolean,
        default: false,
    },
    total_attempted: {
        type: Number,
        default: 0,
    },
    wrong_attempted: {
        type: Number,
        default: 0,
    },
    start_time: {
        type: Date,
        default: null,
    },
    end_time: {
        type: Date,
        default: null,
    },
}, {timestamps: true});

export default mongoose.model("User", userSchema);