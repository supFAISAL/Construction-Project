/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PermitsDataComponent } from './permitsData.component';

describe('PermitsDataComponent', () => {
  let component: PermitsDataComponent;
  let fixture: ComponentFixture<PermitsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
