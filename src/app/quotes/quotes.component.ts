import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { WiseService } from '../wise.service';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  constructor(
    private fb: FormBuilder,
    private wiseService: WiseService
  ) { }
  quoteID: string = ''
  expiration: string = ''
  quoteForm = this.fb.group({
    sourceCurrency: ['', Validators.required],
    destinationCurrency: ['', Validators.required],
    amount: [
      0, 
      [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]
    ],
    profileID: [
    '', 
      [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]
    ]
  })

  // Terrible practice, but strongly typed forms do not exist until Angular 14
  onSubmit() {
    this.wiseService.getQuote(
      this.quoteForm.get('sourceCurrency')?.value,
      this.quoteForm.get('destinationCurrency')?.value,
      this.quoteForm.get('amount')?.value,
      this.quoteForm.get('profileID')?.value,
    ).subscribe(quote => {
      this.quoteID = quote.id
      this.expiration = quote.expirationTime
    })
  }
}
