import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExampleDefinition } from '../../example-registry';
import { EXAMPLES } from '../../examples';
import { AsyncPipe, NgClass } from '@angular/common';
import { SidenavService } from '../../services/sidenav.service';
interface CategoryGroup {
  name: string;
  examples: ExampleDefinition[];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [RouterLink, NgClass, AsyncPipe],
})
export class SidebarComponent {
  sidenav = inject(SidenavService);
  groupedExamples: CategoryGroup[] = [];

  constructor() {
    this.groupedExamples = this.groupByCategory(EXAMPLES);
  }

  private groupByCategory(examples: ExampleDefinition[]): CategoryGroup[] {
    const map: Record<string, ExampleDefinition[]> = {};

    examples.forEach((ex) => {
      const cat = ex.category || '';
      if (!map[cat]) map[cat] = [];
      map[cat].push(ex);
    });

    return Object.keys(map).map((cat) => ({ name: cat, examples: map[cat] }));
  }
}
