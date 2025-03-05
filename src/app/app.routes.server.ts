import { Routes } from '@angular/router';
import { JobOfferListComponent } from './components/job-offer-list/job-offer-list.component';
import { JobOfferFormComponent } from './components/job-offer-form/job-offer-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const appRoutes: Routes & ServerRoute[] = [
  {
    path: '',
    component: JobOfferListComponent,
    renderMode: RenderMode.Prerender // Active le rendu côté serveur
  },
  {
    path: 'create',
    component: JobOfferFormComponent,
    renderMode: RenderMode.Prerender
  },
  {
    path: 'edit/:id',
    component: JobOfferFormComponent,
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    component: NotFoundComponent, // Corrige l'erreur en ajoutant un composant
    renderMode: RenderMode.Prerender
  }
];
