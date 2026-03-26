import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  template: `test`,
})
export class BasicFormComponent {
  @Output() formChange = new EventEmitter<any>();
  fields = [];
  logData(data: any) {
    this.formChange.emit(data);
  }
}
