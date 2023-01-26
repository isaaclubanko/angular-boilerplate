import { Component, Input } from '@angular/core';
import { WiseService } from '../wise.service';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';


interface dynamicFormObject {
  fields: any[]
  title: string
  type: string
}

@Component({
  selector: 'app-account-requirements',
  templateUrl: './account-requirements.component.html',
  styleUrls: ['./account-requirements.component.css']
})
export class AccountRequirementsComponent {
  constructor(
    private wiseService: WiseService
  ){}
  // this is just a placeholder for the API data returned, not an actual form. Most of this logic should be moved into the service
  apiData: any[] = [];
  //used as a key to fill out SelectedForm (bad practice)
  selectBoxOption: string = ''
  // same as above, a dummy object to keep track of a single option selected from API data
  selectedForm: dynamicFormObject = {
    fields: [],
    title: '',
    type: ''
  }
  // actual form which we build to keep track of user input
  form: FormGroup =  new FormGroup({});
  @Input() quoteID?: string;

  getAccountRequirements(): void {
    this.wiseService.getAccountRequirements(this.quoteID).subscribe(data => {
      this.apiData = data
      console.log(data)
    })
  }

  updateFormOption(): void {
    // In the future, use a map or a more elegant way of selecting this data
    // selects a form and fills out empty form data for each field
    // should be broken into two methods, one to select the form, the other to build out the actual form
    if(this.selectBoxOption !== '--' && this.selectBoxOption){
      for (let i = 0; i < this.apiData.length; i++){
        if(this.apiData[i].title === this.selectBoxOption){
          this.selectedForm = this.apiData[i]
          this.selectedForm.fields.forEach(f=>{
            this.form.addControl(f.name,
              new FormControl('')
            )}
          )}
        }
      }
      this.printSelectedForm()
    }
  

  printSelectedForm(): void{
    console.log(this.form)
  }

}

