"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const models_1 = require("../models");
let ProductRepository = class ProductRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.Product.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.Product.findByPk(id);
        });
    }
    findByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.Product.findAll({ where: { userId } });
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.Product.create(product);
        });
    }
};
ProductRepository = __decorate([
    (0, tsyringe_1.injectable)() //Significa que la clase es un servicio que puede ser inyectado
], ProductRepository);
exports.default = ProductRepository;
/**
 * CreationAttributes<Product> es un tipo que representa los atributos que se pueden pasar a la función create de un modelo de Sequelize.
 */
