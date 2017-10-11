"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var myTable = (function () {
    function myTable() {
        this.Categories = ['All Categories', '1', '2', '3'];
        this.Category = this.Categories[0];
        this.newProd = {
            name: 'лимончик',
            category: 2,
            price: 300
        };
        this.Products = [
            { id: 1, name: 'product 1', price: 100, category: 1 },
            { id: 2, name: 'product 2', price: 200, category: 2 },
            { id: 3, name: 'product 3', price: 300, category: 3 },
            { id: 4, name: 'product 4', price: 400, category: 1 },
            { id: 5, name: 'product 5', price: 500, category: 2 },
            { id: 6, name: 'product 6', price: 600, category: 3 },
            { id: 7, name: 'product 7', price: 700, category: 1 },
            { id: 8, name: 'product 8', price: 800, category: 2 },
            { id: 9, name: 'product 9', price: 900, category: 3 }
        ];
    }
    //надо генерировать массив в зависимости от значения Category
    myTable.prototype.generateArr = function () {
        this.NewProducts = this.Products.slice(0, this.Products.length);
        if (this.Category != 'All Categories') {
            var numb_1 = this.Category;
            this.NewProducts = this.NewProducts.filter(function (item) {
                return item.category == numb_1;
            });
            console.log(this.Category);
        }
    };
    myTable.prototype.ngOnInit = function () {
        this.generateArr();
    };
    myTable.prototype.deleteProduct = function (obj) {
        var elem = this.NewProducts.indexOf(obj);
        this.NewProducts.splice(elem, 1);
    };
    myTable.prototype.addProduct = function () {
        var cloneProduct = {};
        for (var key in this.newProd) {
            cloneProduct[key] = this.newProd[key];
        }
        this.Products.push(cloneProduct);
        this.generateArr();
    };
    return myTable;
}());
myTable = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-table',
        templateUrl: 'my-table.component.html',
        styleUrls: ['my-table.component.css'],
        inputs: ["rows"]
    })
], myTable);
exports.default = myTable;
//# sourceMappingURL=my-table.component.js.map