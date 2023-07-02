import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeUrlComponent } from './dialog-change-url.component';

describe('DialogChangeUrlComponent', () => {
  let component: DialogChangeUrlComponent;
  let fixture: ComponentFixture<DialogChangeUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChangeUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChangeUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
