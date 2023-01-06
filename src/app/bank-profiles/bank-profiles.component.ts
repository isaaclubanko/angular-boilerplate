import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-bank-profiles',
  templateUrl: './bank-profiles.component.html',
  styleUrls: ['./bank-profiles.component.css']
})
export class BankProfilesComponent implements OnInit {

  profiles: Profile[] = [];
  selectedProfile!: Profile;
  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profileService.getallProfiles()
      .subscribe(profiles => this.profiles = profiles)
  }
  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }
}
