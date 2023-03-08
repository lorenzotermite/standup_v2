import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBrowseComponent } from './customer-browse.component';

describe('CustomerBrowseComponent', () => {
  let component: CustomerBrowseComponent;
  let fixture: ComponentFixture<CustomerBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
