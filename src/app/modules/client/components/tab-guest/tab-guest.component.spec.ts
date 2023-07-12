import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGuestComponent } from './tab-guest.component';

describe('TabGuestComponent', () => {
  let component: TabGuestComponent;
  let fixture: ComponentFixture<TabGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
