import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './page/dashboard/dashboard.component';
import { EventComponent } from './page/event/event.component';
import { OrderListComponent } from './page/order-list/order-list.component';
import { ProfileComponent } from './page/profile/profile.component';
import { StoryComponent } from './page/story/story.component';

const routes: Routes = [
    {
        path: '',
        component: OrderListComponent
    },
    {
        path: 'dashboard',
        component: DashboardClientComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'event',
        component: EventComponent
    },
    {
        path: 'story',
        component: StoryComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {}
