import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WiseService } from '../wise.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  constructor (
    private wiseService: WiseService
  ){}
  
  accounts: any[] = []

  // Not sure if this is the best way to handle typing issues, but by default form control values are null which makes them unable to be used in the HTTP call
  currency = new FormControl('', { nonNullable: true })

  sendCurrencyUpdate(){
    this.wiseService.getallAccounts(this.currency.value).subscribe( (resp) => {
      this.accounts = resp
      console.log(resp)
    }
    )
  }

}
