import { Component, Input, Output, EventEmitter } from '@angular/core';

export class Customer{
    id:string;
    name:string;
}

@Component({
    selector: 'comp3',
    template: `<div (click)="click()">
        {{customer?.name}}
    </div>
    `,
    providers:[]
    
})
export class Comp3Component { 
    @Input() customer: Customer;    
    @Output() selected = new EventEmitter<Customer>();
    constructor(){}    
    click() {         
        this.selected.next(this.customer); 
    }
}
