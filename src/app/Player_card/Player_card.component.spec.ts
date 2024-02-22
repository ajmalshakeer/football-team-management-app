/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Player_cardComponent } from './Player_card.component';

describe('Admin_pageComponent', () => {
  let component: Player_cardComponent;
  let fixture: ComponentFixture<Player_cardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Player_cardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Player_cardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
