import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneCreateComponent } from './airplane-create.component';

describe('AirplaneCreateComponent', () => {
  let component: AirplaneCreateComponent;
  let fixture: ComponentFixture<AirplaneCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
