import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ContactUs } from './pages/contact-us/contact-us';
import { ExamplePageComponent } from './components/example-page/example-page.component';

export const routes: Routes = [
  {
    path: 'examples/:id',
    component: ExamplePageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact-us',
    component: ContactUs,
  },
];
