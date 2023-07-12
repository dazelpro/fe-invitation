import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGiftComponent } from './dialog-gift.component';

describe('DialogGiftComponent', () => {
  let component: DialogGiftComponent;
  let fixture: ComponentFixture<DialogGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
