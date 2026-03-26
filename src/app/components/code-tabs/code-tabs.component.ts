import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule, LanguagePipe } from 'ngx-markdown';

@Component({
  selector: 'code-tabs',
  templateUrl: './code-tabs.component.html',
  imports: [MatTabsModule, MarkdownModule, LanguagePipe],
})
export class CodeTabsComponent {
  @Input() codeAssets: { label: string; language: string; content: string }[] = [];
}
