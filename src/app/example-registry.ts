import { Type } from '@angular/core';

export interface ExampleAsset {
  label: string; // Tab label, e.g. "TS", "HTML", "SCSS"
  language: string; // Highlight.js language, e.g. "typescript", "html", "scss"
  content: string; // Lazy loader function
}

export interface ExampleDefinition {
  id: string;
  title: string;
  description: string;
  component: Type<any>;
  assets: ExampleAsset[]; // <-- array of code assets
  category?: string;
}
