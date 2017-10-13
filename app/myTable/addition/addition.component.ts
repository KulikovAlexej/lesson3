import { Component, Input } from '@angular/core';
import  myTable  from '../my-table.component'

@Component({
    moduleId: module.id,
    selector: 'addition',
    templateUrl: 'addition.component.html',
    styleUrls: ['addition.component.css']
})

export default class addition {
    newProd: Object = {
        name: '',
        category: null,
        price: ''
    };

    @Input()
    primaryArr: Array<any> = [];

    @Input()
    readyArr: Array<any> = [];

    @Input()
    categoryList: Array<string> = [];

    @Input()
    category;

    generateArr() {
        this.readyArr = this.primaryArr.slice(0, this.primaryArr.length);
        if (this.category != 'All Categories') {
            let numb = this.category;
            this.readyArr = this.readyArr.filter(function (item) {
                return item.category == numb
            });
            console.log(this.category);
            console.log('im working');
        }

    }

    addProduct() {
        let cloneProduct = {...this.newProd};
        this.primaryArr.push(cloneProduct);
        // console.log(cloneProduct);
        // console.log(this.primaryArr);
        this.generateArr();
        // console.log(this.readyArr)
        
    }
}