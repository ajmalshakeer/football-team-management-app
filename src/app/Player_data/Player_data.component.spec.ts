/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Player_dataComponent } from './Player_data.component';

describe('Player_dataComponent', () => {
  let component: Player_dataComponent;
  let fixture: ComponentFixture<Player_dataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Player_dataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Player_dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
