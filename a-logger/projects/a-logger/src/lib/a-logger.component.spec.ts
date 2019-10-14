import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALoggerComponent } from './a-logger.component';

describe('ALoggerComponent', () => {
  let component: ALoggerComponent;
  let fixture: ComponentFixture<ALoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
