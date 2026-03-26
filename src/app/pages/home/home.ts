import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import introMd from '../../examples/test.ts.txt';
@Component({
  selector: 'app-home',
  imports: [MarkdownModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  content = introMd; // dynamically pick based on route mapping
}
