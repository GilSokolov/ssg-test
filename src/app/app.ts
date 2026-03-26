import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, ToolbarComponent, NgClass, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  service = inject(SidenavService);
}
