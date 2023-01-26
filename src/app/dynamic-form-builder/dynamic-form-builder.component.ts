import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountRequirementFormField } from '../models/requirement_form';

interface dynamicFormObject {
  fields: AccountRequirementFormField[]
  title: string
  type: string
}

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent {
  // guess you have to fill these out withvalues?
  @Input() form!: FormGroup;
  @Input() fields: AccountRequirementFormField[] = [
    new AccountRequirementFormField(
      '',
      [{
          key: "" ,
          name: "", 
          type: "", 
          refreshRequirementsOnChange: false,
      }]
    )
  ];
  constructor() { }
  
}
