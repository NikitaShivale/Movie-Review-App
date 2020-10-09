import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'catalog-movies', loadChildren: () => import('./catalog-movies/catalog-movies.module').then(m => m.CatalogMoviesModule) },
    { path: 'signin', loadChildren: () => import('./authentication/auth.module').then(m => m.AuthenticationModule) },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}