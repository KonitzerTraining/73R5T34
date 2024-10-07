import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpIndexComponent } from './help-index.component';

describe('HelpIndexComponent', () => {
  let component: HelpIndexComponent;
  let fixture: ComponentFixture<HelpIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
