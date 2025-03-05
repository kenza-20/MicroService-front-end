import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // 👈 Ajout de HttpClient
import { appRoutes } from './app/app.routes.server';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes), // Routes
    provideHttpClient()       // 👈 Ajout du client HTTP
  ]
};
