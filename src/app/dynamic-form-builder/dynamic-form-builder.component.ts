import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface dynamicFormObject {
  fields: any[]
  title: string
  type: string
}

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent {
  @Input() fields: any[] = [];
  // @Input() chosenNumber?: number;
  constructor() { }
  
}
