import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIndexComponent } from './customer-index.component';
import { RouterOutlet } from '@angular/router';

describe('CustomerIndexComponent', () => {
  let component: CustomerIndexComponent;
  let fixture: ComponentFixture<CustomerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterOutlet
      ],
      declarations: [CustomerIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
