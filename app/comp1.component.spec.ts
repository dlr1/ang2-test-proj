/* tslint:disable:no-unused-variable */

import {DebugElement} from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

import {Comp1Component} from './comp1.component';

describe('testing Comp1 component',()=>{

  let comp1: Comp1Component;

  let fixture:ComponentFixture<Comp1Component>;
  let comp: Comp1Component;
  let el:DebugElement;

  beforeEach(()=>{
    comp1 = new Comp1Component();
    TestBed.configureTestingModule({
      declarations:[Comp1Component]
    })

    fixture = TestBed.createComponent(Comp1Component);
    comp = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('h2'));
  
  })

  it('should set h2 value',()=>{    
    comp.someVar = "this is a test"
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toContain('this is a test');
  })

  it('should set variable value',()=>{
    comp1.someVar = "this is a test"
    console.log('1');
    expect(comp1.someVar).toBe('this is a test');
  })

  it('should display variable value',()=>{
    comp1.someVar = "this is a test"
    console.log('2');
    expect(comp1.someVar).toBe('this is a test');
  })

})