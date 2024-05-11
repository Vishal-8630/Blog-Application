import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String],
        required: true,
        enum: ['Programming', 'Question', 'History', 'Private Sector', 'Public Sector']
    }
});

blogSchema.pre('save', function(next) {
    this.modifiedAt = new Date();
    next();
})

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;