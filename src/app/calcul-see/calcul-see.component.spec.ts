import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculSeeComponent } from './calcul-see.component';

describe('CalculSeeComponent', () => {
  let component: CalculSeeComponent;
  let fixture: ComponentFixture<CalculSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculSeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
