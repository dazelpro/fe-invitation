import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { Story } from '../../../../core/models/client.model';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';
import { ConfirmationDeleteComponent } from '../../../../shared/dialogs/confirmation-delete/confirmation-delete.component';
import { DialogStoryComponent } from '../../components/dialog-story/dialog-story.component';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
    id;
    listStory: Story;
    breadcrumbs: Breadcrumb[] = [];
    constructor(
        public dialog: MatDialog,
        private clientService: ClientService,
        private _snackBar: MatSnackBar,
        private storageService: StorageService,
        private router: Router
    ) {
        this.breadcrumbs = [
            { label: 'Client', url: '/client' },
            { label: 'Dashboard', url: `/client/dashboard` },
            { label: 'Cerita Cinta', url: `/client/story` }
        ];
    }

    ngOnInit(): void {
        this.id = this.storageService.getIdParam('id-order-param');
        if (!this.id) {
            this.router.navigate(['/client']);
        } else {
            this.fetchStory();
        }
    }
    fetchStory() {
        let params = {
            idOrder: this.id
        };
        this.clientService.getStory(params).subscribe({
            next: (r) => {
                this.listStory = r.data.story;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    openDialogStory(edited: boolean, arr: any) {
        let param = {};
        if (edited) {
            param = { data: arr };
        }
        const dialogRef = this.dialog.open(DialogStoryComponent, {
            width: '90%',
            maxWidth: '500px',
            height: 'auto',
            ...param
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) this.ngOnInit();
        });
    }

    openDialogDelete(arr: any) {
        const dialogRef = this.dialog.open(ConfirmationDeleteComponent, {
            width: '90%',
            maxWidth: '350px',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) this.deleteStory(arr);
        });
    }

    deleteStory(arr: any) {
        let params = {
            id: arr.id
        };
        this.clientService.deleteStory(params).subscribe({
            next: (r) => {
                if (r) this.ngOnInit();
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
