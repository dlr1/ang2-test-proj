import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Injectable} from '@angular/core';

export class Customer{
    id:string;
    name:string;
}



@Injectable()
export class DataService{   

    doLogin(): Promise<boolean>{                
        return Promise.resolve(true);
    }
}

@Component({
    selector: 'comp3',
    template: `<div (click)="gotoDetail()">
        {{customer?.name}}
    </div>
    `,
    providers:[]
    
})
export class Comp4Component { 
   
   c: Customer = {id:'a', name:'b'};

   constructor(private router: Router, private heroService: DataService) {}

   gotoDetail() {
        let url = `/customers/${this.c.id}`;
        this.router.navigateByUrl(url);
    }

}
