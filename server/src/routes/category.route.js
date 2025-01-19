import { Router } from "express";
import isAuthenticated from "../middlewares/auth.middleware.js";
import categoryController from "../controllers/category.controller.js";

const router = Router();

router.route("/categories").get(isAuthenticated, categoryController.getAllCategories);
router.route("/category/store").post(isAuthenticated, categoryController.storeCategory);
router.route("/category/:id/update").patch(isAuthenticated, categoryController.updateCategory);
router.route("/category/:id/delete").post(isAuthenticated, categoryController.deleteCategory);
router.route("/category/:id/restore").post(isAuthenticated, categoryController.restoreCategory);
router.route("/category/:id/pin").get(isAuthenticated, categoryController.pinCategory);
router.route("/category/:id/unpin").get(isAuthenticated, categoryController.unpinCategory);
router.route("/category/:id/order").get(isAuthenticated, categoryController.orderCategory);
router.route("/category/search").get(isAuthenticated, categoryController.searchCategory);

export default router;
