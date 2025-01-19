import asyncHandler from "../middlewares/asyncHandler.js";
import Category from "../models/category.model.js";
import { apiError, apiResponse } from "../utils/responseFormatter.js";

class categoryController {
	static getAllCategories = asyncHandler(async (req, res) => {
		const categories = await Category.find(
			{ userId: req.user._id },
		).sort({ isPinned: -1, order: 1 })
		return apiResponse(res, categories, "Success");
	});

	static storeCategory = asyncHandler(async (req, res) => {
		const { name } = req.body;

		if (!name) {
			return apiError(res, "Category name is required", 400);
		}

		if (await Category.findOne({ name, userId: req.user._id })) {
			return apiError(res, "Category already exists", 400);
		}

		const category = await Category.create({ name, userId: req.user._id });

		if (!category) {
			return apiError(res, "Failed to create category", 400);
		}
		return apiResponse(res, category, "Success");
	});

	static updateCategory = asyncHandler(async (req, res) => {
		const { name } = req.body;

		if (!name) {
			return apiError(res, "Category name is required", 400);
		}

		if (await Category.findOne({ id: req.params.id, name, userId: req.user._id })) {
			return apiError(res, "Category already exists", 400);
		}

		const category = await Category.findByIdAndUpdate({ userId: req.user._id, _id: req.params.id }, { name }, {
			new: true,
		});

		if (!category) {
			return apiError(res, "Failed to update category", 400);
		}
		return apiResponse(res, category, "Success");
	});

	static deleteCategory = asyncHandler(async (req, res) => {
		const category = await Category.findByIdAndDelete({ userId: req.user._id, _id: req.params.id });

		if (!category) {
			return apiError(res, "Failed to delete category", 400);
		}
		return apiResponse(res, category, "Success");
	});

	static restoreCategory = asyncHandler(async (req, res) => {
		const category = await Category.findByIdAndUpdate({ userId: req.user._id, _id: req.params.id }, { deletedAt: null }, {
			new: true,
		});

		if (!category) {
			return apiError(res, "Failed to restore category", 400);
		}
		return apiResponse(res, category, "Success");
	});

	static pinCategory = asyncHandler(async (req, res) => {
		const category = await Category.findByIdAndUpdate({ userId: req.user._id, _id: req.params.id }, { isPinned: true }, {
			new: true,
		});

		if (!category) {
			return apiError(res, "Failed to pin category", 400);
		}
		return apiResponse(res, category, "Success");
	});

	static unpinCategory = asyncHandler(async (req, res) => {
		const category = await Category.findByIdAndUpdate({ userId: req.user._id, _id: req.params.id }, { isPinned: false }, {
			new: true,
		});

		if (!category) {
			return apiError(res, "Failed to unpin category", 400);
		}
		return apiResponse(res, category, "Success");
	});

	static orderCategory = asyncHandler(async (req, res) => {
		const { order } = req.body;
		const category = await Category.findByIdAndUpdate({ userId: req.user._id, _id: req.params.id }, { order }, {
			new: true,
		});

		if (!category) {
			return apiError(res, "Failed to order category", 400);
		}
		return apiResponse(res, category, "Success");
	});

	static searchCategory = asyncHandler(async (req, res) => {
		const { query } = req.query;
		const categories = await Category.find(
			{ userId: req.user._id, name: { $regex: query, $options: "i" } },
		).sort({ isPinned: -1, order: 1 })
		return apiResponse(res, categories, "Success");
	});
}

export default categoryController;