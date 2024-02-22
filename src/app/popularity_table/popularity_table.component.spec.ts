/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Popularity_tableComponent } from './popularity_table.component';

describe('Popularity_tableComponent', () => {
  let component: Popularity_tableComponent;
  let fixture: ComponentFixture<Popularity_tableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popularity_tableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popularity_tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
