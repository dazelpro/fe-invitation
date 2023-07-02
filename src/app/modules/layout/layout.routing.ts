import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from '../../core/constants/role.const';
import { PageGuard } from '../../core/guards/page.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                canActivate: [PageGuard],
                data: {
                    expectedRole: [Role.ADMIN]
                },
                loadChildren: () => import('../admin/admin.module').then((module) => module.AdminModule)
            },
            {
                path: 'client',
                canActivate: [PageGuard],
                data: {
                    expectedRole: [Role.MEMBER]
                },
                loadChildren: () => import('../client/client.module').then((module) => module.ClientModule)
            }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
