import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormField } from '../requirement_form';

interface dynamicFormObject {
  fields: FormField[]
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
  @Input() form: any;
  @Input() fields: FormField[] = [
    new FormField(
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
