import { Component, Input, Output, EventEmitter } from '@angular/core';
import  myTable  from '../my-table.component'

@Component({
    moduleId: module.id,
    selector: 'addition',
    templateUrl: 'addition.component.html',
    styleUrls: ['addition.component.css']
})

export default class addition {
    newProd: Object<any> = {
        name: '',
        category: '',
        price: ''
    };

    @Input() Products: Array<any> = [];
    @Input() Categories: Array<any> = [];
    Category;
    addingCategories;
    

    @Output() addingProduct: EventEmitter<any> = new EventEmitter;

    ngOnInit(){
        this.addingCategories = [...this.Categories];
        this.addingCategories = this.addingCategories.splice(1,this.addingCategories.length - 1);
        console.log(this.Categories);
    }
    addProduct(event) {
        if(this.newProd.name != "" && this.newProd.category != "" && this.newProd.price != ""){
            let cloneProduct = {...this.newProd};
            this.Products.push(cloneProduct);   
            this.addingProduct.emit(this.Products);
        }
        
    }
}