import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect} from '@jest/globals';


import { CustomerAccountsComponent } from './customer-accounts.component';

describe('CustomerAccountsComponent', () => {
  let component: CustomerAccountsComponent;
  let fixture: ComponentFixture<CustomerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
