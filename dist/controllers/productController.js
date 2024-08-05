"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    static getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const products = yield productService.getAllProducts();
            res.json(products);
        });
    }
    static getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const product = yield productService.getProductById(parseInt(req.params.id));
            res.json(product);
        });
    }
    static getProductsByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const products = yield productService.getProductsByUserId(parseInt(req.params.userId));
            res.json(products);
        });
    }
    static createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const product = yield productService.createProduct(req.body);
            res.status(201).json(product);
        });
    }
}
exports.default = ProductController;
