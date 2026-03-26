import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MarkdownModule, LanguagePipe } from 'ngx-markdown';

@Component({
  selector: 'result-viewer',
  template: `
    @if (value) {
      <markdown [data]="value | json | language: 'javascript'"></markdown>
    }
  `,
  imports: [JsonPipe, MarkdownModule, LanguagePipe],
})
export class ResultViewerComponent {
  @Input() value: any;
}
