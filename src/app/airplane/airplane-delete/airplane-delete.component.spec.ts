import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneDeleteComponent } from './airplane-delete.component';

describe('AirplaneDeleteComponent', () => {
  let component: AirplaneDeleteComponent;
  let fixture: ComponentFixture<AirplaneDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
