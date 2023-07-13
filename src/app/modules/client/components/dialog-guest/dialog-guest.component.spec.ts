import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGuestComponent } from './dialog-guest.component';

describe('DialogGuestComponent', () => {
  let component: DialogGuestComponent;
  let fixture: ComponentFixture<DialogGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
