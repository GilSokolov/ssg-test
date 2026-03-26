import { RenderMode, ServerRoute } from '@angular/ssr';
import { EXAMPLES } from './examples';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => EXAMPLES.map(({ id }) => ({ id })),
  },
];
