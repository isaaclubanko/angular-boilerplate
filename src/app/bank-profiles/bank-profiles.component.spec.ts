import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankProfilesComponent } from './bank-profiles.component';

describe('BankProfilesComponent', () => {
  let component: BankProfilesComponent;
  let fixture: ComponentFixture<BankProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
