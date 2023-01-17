import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { WiseService } from '../wise.service';

@Component({
  selector: 'app-bank-profiles',
  templateUrl: './bank-profiles.component.html',
  styleUrls: ['./bank-profiles.component.css']
})
export class BankProfilesComponent implements OnInit {

  profiles: Profile[] = [];
  selectedProfile!: Profile;
  constructor(
    private wiseService: WiseService
  ) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.wiseService.getallProfiles()
      .subscribe(profiles => this.profiles = profiles)
  }
  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }
}
