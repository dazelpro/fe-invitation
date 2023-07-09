import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { ClientRoutingModule } from './client.routing';
import { DialogChangeUrlComponent } from './components/dialog-change-url/dialog-change-url.component';
import { DialogEventComponent } from './components/dialog-event/dialog-event.component';
import { DialogProfileComponent } from './components/dialog-profile/dialog-profile.component';
import { DashboardClientComponent } from './page/dashboard/dashboard.component';
import { EventComponent } from './page/event/event.component';
import { OrderListComponent } from './page/order-list/order-list.component';
import { ProfileComponent } from './page/profile/profile.component';
import { StoryComponent } from './page/story/story.component';
import { DialogStoryComponent } from './components/dialog-story/dialog-story.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { DialogGalleryComponent } from './components/dialog-gallery/dialog-gallery.component';
@NgModule({
    declarations: [
        OrderListComponent,
        DialogChangeUrlComponent,
        DashboardClientComponent,
        ProfileComponent,
        DialogProfileComponent,
        EventComponent,
        DialogEventComponent,
        StoryComponent,
        DialogStoryComponent,
        GalleryComponent,
        DialogGalleryComponent
    ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        MaterialModule,
        SharedModule,
        FormsModule,
        ImageCropperModule
    ]
})
export class ClientModule {}
