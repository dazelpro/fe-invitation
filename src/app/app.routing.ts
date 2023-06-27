import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousGuard } from './core/guards/anonymous.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'authentication',
        pathMatch: 'full',
        canActivate: [AnonymousGuard],
        loadChildren: () => import('./modules/auth/auth.module').then((module) => module.AuthModule)
    },
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/layout/layout.module').then((module) => module.LayoutModule)
    },
    { path: '**', redirectTo: 'authentication', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [
        CommonModule,
        RouterModule
    ]
})
export class RoutingModule {}
