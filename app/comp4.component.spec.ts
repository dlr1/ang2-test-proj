/* tslint:disable:no-unused-variable */

import {DebugElement} from '@angular/core';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { By }             from '@angular/platform-browser';

import {Comp4Component, DataService, Customer} from './comp4.component';

class FakeRouter {
  navigateByUrl(url: string) { return url;  }
}


describe('testing Comp3 component',()=>{

  let comp1: Comp4Component;

  let fixture:ComponentFixture<Comp4Component>;
  let comp: Comp4Component;
  let el:DebugElement;

  beforeEach(()=>{
   
    TestBed.configureTestingModule({
      declarations:[Comp4Component],
       providers: [
                    { provide: DataService, useClass: DataService },
                    { provide: Router,      useClass: FakeRouter }
                  ]
    })

    fixture = TestBed.createComponent(Comp4Component);
    comp = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('div'));
  
  })

     it('should tell ROUTER to navigate when hero clicked',
      inject([Router], (router: Router) => { // ...

      const spy = spyOn(router, 'navigateByUrl');

      el.triggerEventHandler('click', null);

      // args passed to router.navigateByUrl()
      const navArgs = spy.calls.first().args[0];

      // expecting to navigate to id of the component's first hero
      const id = comp.c.id;
      expect(navArgs).toBe('/customers/' + id,
        'should nav to customer detail for customer');
    }));

 
})