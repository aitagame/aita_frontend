export interface Element {
  id: ElementId;
  name: string;
  url: string;
}

export type ElementId = 'terrestrial' | 'air' | 'inferno' | 'aqua';
