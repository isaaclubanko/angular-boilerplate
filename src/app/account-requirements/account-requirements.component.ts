import { Component, Input } from '@angular/core';
import { WiseService } from '../wise.service';

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

  @Input() quoteID?: string;
  formData: any[] = [];
  selectedForm: dynamicFormObject = {
    fields: [],
    title: '',
    type: ''
  }
  selectBoxOption: string = ''

  getAccountRequirements(): void {
    this.wiseService.getAccountRequirements(this.quoteID).subscribe(data => {
      this.formData = data
      console.log(data)
    })
  }

  updateFormOption(): void {
    // In the future, use a map or a more elegant way of selecting this data
    if(this.selectBoxOption !== '--' && this.selectBoxOption){
      for (let i = 0; i < this.formData.length; i++){
        if(this.formData[i].title === this.selectBoxOption){
          this.selectedForm = this.formData[i]
        }
      }
    }
  }

  printSelectedForm(): void{
    console.log(this.selectedForm)
  }

}

