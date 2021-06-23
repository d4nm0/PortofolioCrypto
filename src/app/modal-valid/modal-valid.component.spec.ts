import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalValidComponent } from './modal-valid.component';

describe('ModalValidComponent', () => {
  let component: ModalValidComponent;
  let fixture: ComponentFixture<ModalValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
