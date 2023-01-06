import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankProfileDetailComponent } from './bank-profile-detail.component';

describe('BankProfileDetailComponent', () => {
  let component: BankProfileDetailComponent;
  let fixture: ComponentFixture<BankProfileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankProfileDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
