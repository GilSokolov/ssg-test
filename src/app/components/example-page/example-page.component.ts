import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  OnDestroy,
  outputBinding,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { ExampleDefinition } from '../../example-registry';
import { EXAMPLES } from '../../examples';
import { CodeTabsComponent } from '../code-tabs/code-tabs.component';
import { DemoCardComponent } from '../demo-card/demo-card.component';
import { ResultViewerComponent } from '../result-viewer/result-viewer.component';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrl: './example-page.component.scss',
  imports: [DemoCardComponent, CodeTabsComponent, ResultViewerComponent, MarkdownModule],
  providers: [provideMarkdown()],
})
export class ExamplePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('demoContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  example!: ExampleDefinition;

  private compRef?: ComponentRef<any>;

  formValue: any;

  codeAssets: { label: string; language: string; content: string }[] = [];

  sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
  ) {}

  loadComponent() {
    this.container.clear();

    this.compRef = this.container.createComponent(this.example.component, {
      bindings: [
        outputBinding('formChange', (value) => {
          this.formValue = value;
        }),
      ],
    });
  }

  ngAfterViewInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.example = EXAMPLES.find((e) => e.id === params['id'])!;
      this.formValue = undefined;
      this.cd.detectChanges();
      this.loadComponent();
    });
  }

  ngOnDestroy() {
    if (this.compRef) {
      this.compRef.destroy();
      this.compRef = undefined;
    }

    this.container?.clear();

    this.sub?.unsubscribe();
  }
}
