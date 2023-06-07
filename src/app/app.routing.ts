import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'auth',
		pathMatch: 'full',
		loadChildren: () =>
			import('./modules/auth/auth.module').then(
				(module) => module.AuthModule
			),
	},
	{
		path: '',
		// canActivate: [AuthGuard],
		loadChildren: () =>
			import('./modules/layout/layout.module').then(
				(module) => module.LayoutModule
			),
	},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ],
    exports: [CommonModule, RouterModule],
})
export class RoutingModule {}
