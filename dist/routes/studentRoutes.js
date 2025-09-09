"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentController_1 = __importDefault(require("../controllers/studentController"));
const router = express_1.default.Router();
const studentController = new studentController_1.default();
//get all students (main page)\
router.get('/', studentController.getAllStudents);
exports.default = router;
//# sourceMappingURL=studentRoutes.js.map