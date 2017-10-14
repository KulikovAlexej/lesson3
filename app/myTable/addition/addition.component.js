"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var addition = (function () {
    function addition() {
        this.newProd = {
            name: '',
            category: '',
            price: ''
        };
        this.Products = [];
        this.Categories = [];
        this.addingProduct = new core_1.EventEmitter;
    }
    addition.prototype.ngOnInit = function () {
        this.addingCategories = this.Categories.slice();
        this.addingCategories = this.addingCategories.splice(1, this.addingCategories.length - 1);
        console.log(this.Categories);
    };
    addition.prototype.addProduct = function (event) {
        if (this.newProd.name != "" && this.newProd.category != "" && this.newProd.price != "") {
            var cloneProduct = __assign({}, this.newProd);
            this.Products.push(cloneProduct);
            this.addingProduct.emit(this.Products);
        }
    };
    return addition;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], addition.prototype, "Products", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], addition.prototype, "Categories", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], addition.prototype, "addingProduct", void 0);
addition = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addition',
        templateUrl: 'addition.component.html',
        styleUrls: ['addition.component.css']
    })
], addition);
exports.default = addition;
//# sourceMappingURL=addition.component.js.map