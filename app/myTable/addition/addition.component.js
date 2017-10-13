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
            category: null,
            price: ''
        };
        this.primaryArr = [];
        this.readyArr = [];
        this.categoryList = [];
    }
    addition.prototype.generateArr = function () {
        this.readyArr = this.primaryArr.slice(0, this.primaryArr.length);
        if (this.category != 'All Categories') {
            var numb_1 = this.category;
            this.readyArr = this.readyArr.filter(function (item) {
                return item.category == numb_1;
            });
            console.log(this.category);
            console.log('im working');
        }
    };
    addition.prototype.addProduct = function () {
        var cloneProduct = __assign({}, this.newProd);
        this.primaryArr.push(cloneProduct);
        // console.log(cloneProduct);
        // console.log(this.primaryArr);
        this.generateArr();
        // console.log(this.readyArr)
    };
    return addition;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], addition.prototype, "primaryArr", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], addition.prototype, "readyArr", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], addition.prototype, "categoryList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], addition.prototype, "category", void 0);
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