/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PermitsRenewComponent } from './permitsRenew.component';

describe('PermitsRenewComponent', () => {
  let component: PermitsRenewComponent;
  let fixture: ComponentFixture<PermitsRenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitsRenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitsRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
