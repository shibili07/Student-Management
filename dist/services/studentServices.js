"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("../models/Student"));
class StudentService {
    async getAllStudents() {
        try {
            return await Student_1.default.find().sort({ createdAt: -1 });
        }
        catch (error) {
            throw new Error(`Error getting students: ${error}`);
        }
    }
}
exports.default = StudentService;
//# sourceMappingURL=studentServices.js.map