import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequirementsComponent } from './account-requirements.component';

describe('AccountRequirementsComponent', () => {
  let component: AccountRequirementsComponent;
  let fixture: ComponentFixture<AccountRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
