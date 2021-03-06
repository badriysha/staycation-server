const router = require("express").Router();
const { route } = require(".");
const adminController = require("../controllers/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer");

router.get("/dashboard", adminController.viewDashboard);
// Endpoint Category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);
// Endpoint Bank
router.get("/bank", adminController.viewBank);
router.post("/bank", upload, adminController.addBank);
router.put("/bank", upload, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);
// Endpoint Item
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/:id/delete", adminController.deleteItem);
// Endpoint Feature
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);
// Endpoint Booking
router.get("/booking", adminController.viewBooking);

module.exports = router;
