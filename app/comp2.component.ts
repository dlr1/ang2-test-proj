import { Component } from '@angular/core';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService{   

    doLogin(): Promise<boolean>{                
        return Promise.resolve(true);
    }
}

@Component({
    selector: 'comp2',
    template: '<h2>{{isLoggedIn}}</h2>',
    providers:[UserService]
    
})
export class Comp2Component { 

    isLoggedIn = false;
    constructor(private _userService: UserService){
        
    }

    logIn(){
        this._userService.doLogin().then(x=>{            
            this.isLoggedIn = x});
    }

    ngOnInit(){

    }

    
}
