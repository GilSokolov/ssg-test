import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [NgClass, AsyncPipe],
})
export class ToolbarComponent {
  sidenav = inject(SidenavService);
}
