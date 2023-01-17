import { Component, Input } from '@angular/core';
import { WiseService } from '../wise.service';

@Component({
  selector: 'app-account-requirements',
  templateUrl: './account-requirements.component.html',
  styleUrls: ['./account-requirements.component.css']
})
export class AccountRequirementsComponent {
  constructor(
    private wiseService: WiseService
  ){}

  @Input() quoteID?: string;

  getAccountRequirements(): void {
    this.wiseService.getAccountRequirements(this.quoteID).subscribe(data => {
      console.log(data)
    })
  }
}
