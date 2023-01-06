import { Profile } from '../profile';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bank-profile-detail',
  templateUrl: './bank-profile-detail.component.html',
  styleUrls: ['./bank-profile-detail.component.css']
})
export class BankProfileDetailComponent implements OnInit {
  @Input() profile?: Profile;

  constructor() { }

  ngOnInit(): void {
  }
}
