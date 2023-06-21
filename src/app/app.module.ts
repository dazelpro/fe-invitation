import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
