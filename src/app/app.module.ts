import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
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
        MatDialogModule,
        MatSnackBarModule
    ],
    providers: [
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: { duration: 3000, horizontalPosition: 'end', verticalPosition: 'top' }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
