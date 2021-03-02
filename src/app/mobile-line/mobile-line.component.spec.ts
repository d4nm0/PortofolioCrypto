import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLineComponent } from './mobile-line.component';

describe('MobileLineComponent', () => {
  let component: MobileLineComponent;
  let fixture: ComponentFixture<MobileLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
