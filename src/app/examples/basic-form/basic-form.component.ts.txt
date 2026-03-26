import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import { EmailField, SubmitButton, TextField } from '@preforms/ts';

@Component({
  selector: 'app-basic-form',
  template: ` <preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" /> `,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class BasicFormComponent {
  @Output() formChange = new EventEmitter<any>();
  fields = [
    new TextField({
      key: 'name',
      label: 'Full name',
      placeholder: 'John Doe',
      required: true,
    }),

    new EmailField({
      placeholder: 'you@example.com',
    }),

    new SubmitButton('Save'),
  ];
  logData(data: any) {
    this.formChange.emit(data);
  }
}
