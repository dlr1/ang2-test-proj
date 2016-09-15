import { Component } from '@angular/core';

@Component({
    selector: 'comp1',
    template: '<h2>{{someVar}}</h2>'
})
export class Comp1Component { 

    _someVar:string;
    constructor(){
        
    }

    get someVar(){
        return this._someVar;
    }
    set someVar(val: string){
        this._someVar = val;
    }
}
