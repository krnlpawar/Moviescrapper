import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	order: {
		type: Number,
		default: 0
	},
	status: {
		type: String,
		default: "active"
	},
	isPinned: {
		type: Boolean,
		default: false
	},	
	deletedAt: {
		type: Date,
	},
}, {
	timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

export default Category;