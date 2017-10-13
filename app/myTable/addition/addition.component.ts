import { Component, Input, Output, EventEmitter } from '@angular/core';
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

    @Output()
    addProductEvent: EventEmitter<any> = new EventEmitter;

    @Input()
    primaryArr: Array<any> = [];

    @Input()
    readyArr: Array<any> = [];

    @Input()
    categoryList: Array<string> = [];

    @Input()
    category;

    addProduct(){
        this.addProductEvent.emit(this.newProd)
    }


}