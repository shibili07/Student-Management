"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentServices_1 = __importDefault(require("../services/studentServices"));
class StudentController {
    constructor() {
        this.getAllStudents = async (req, res, next) => {
            try {
                const students = await this.studentService.getAllStudents();
                res.render('index', {
                    students, message: req.query.message || ''
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.studentService = new studentServices_1.default();
    }
}
exports.default = StudentController;
//# sourceMappingURL=studentController.js.map