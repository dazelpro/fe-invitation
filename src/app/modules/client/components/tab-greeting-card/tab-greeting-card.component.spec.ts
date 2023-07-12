import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGreetingCardComponent } from './tab-greeting-card.component';

describe('TabGreetingCardComponent', () => {
  let component: TabGreetingCardComponent;
  let fixture: ComponentFixture<TabGreetingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGreetingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGreetingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
