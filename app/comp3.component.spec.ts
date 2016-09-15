/* tslint:disable:no-unused-variable */

import {DebugElement} from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

import {Comp3Component, Customer} from './comp3.component';

describe('testing Comp3 component',()=>{

  let comp1: Comp3Component;

  let fixture:ComponentFixture<Comp3Component>;
  let comp: Comp3Component;
  let el:DebugElement;

  beforeEach(()=>{
   
    TestBed.configureTestingModule({
      declarations:[Comp3Component]
    })

    fixture = TestBed.createComponent(Comp3Component);
    comp = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('div'));
  
  })

  it('should set div value',()=>{    
    comp.customer = {id:'aaaaaa', name:'customer...1!'}
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toContain('customer...1!');
  })

  it('should handle click',()=>{
      let selectedCustomer: Customer;
       comp.customer = {id:'aaaaaa', name:'customer...1!'}
      comp.selected.subscribe((c:Customer)=>{          
          selectedCustomer = c});      
      el.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(selectedCustomer.id).toBe('aaaaaa')      
      
  })
 
})