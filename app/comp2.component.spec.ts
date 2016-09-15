/* tslint:disable:no-unused-variable */
import {DebugElement} from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

import {Comp2Component, UserService} from './comp2.component';

describe('testing Comp2 component',()=>{
  
  let fixture:ComponentFixture<Comp2Component>;
  let comp: Comp2Component;
  let el:DebugElement;

  beforeEach(()=>{

       // fake UserService for test purposes
    const fakeUserService = {
      isLoggedIn: true      
    };

    
    TestBed.configureTestingModule({
      declarations:[Comp2Component],
      providers:[UserService]       
    })

    fixture = TestBed.createComponent(Comp2Component);
    comp = fixture.componentInstance;

    //let userService = fixture.debugElement.injector.get(UserService);
    el = fixture.debugElement.query(By.css('h2'));
  
  })

  it('h2 should have false before calling login',()=>{
      fixture.detectChanges();
      expect(el.nativeElement.textContent).toContain('false');
  })
 
 it('h2 should have true after calling login using real service (async)',async(()=>{      
      comp.logIn();
      fixture.whenStable().then(()=>{                
        fixture.detectChanges();
        expect(comp.isLoggedIn).toBe(true);
      })
      
    })
  )

  it('h2 should have true after calling login using spy service',()=>{
      let userService = fixture.debugElement.injector.get(UserService);

      let spy = spyOn(userService,'doLogin').and.returnValue(Promise.resolve(true));
      comp.logIn();
      expect(spy.calls.any()).toBe(true, 'spy - doLogin called');
    }
  )


})