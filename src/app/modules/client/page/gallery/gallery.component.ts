import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { Gallery } from '../../../../core/models/client.model';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';
import { UploadService } from '../../../../core/services/upload.service';
import { ConfirmationDeleteComponent } from '../../../../shared/dialogs/confirmation-delete/confirmation-delete.component';
import { DialogGalleryComponent } from '../../components/dialog-gallery/dialog-gallery.component';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    id;
    listGallery: Gallery;
    breadcrumbs: Breadcrumb[] = [];
    constructor(
        public dialog: MatDialog,
        private clientService: ClientService,
        private _snackBar: MatSnackBar,
        private storageService: StorageService,
        private router: Router,
        private uploadService: UploadService
    ) {
        this.breadcrumbs = [
            { label: 'Client', url: '/client' },
            { label: 'Dashboard', url: `/client/dashboard` },
            { label: 'Galeri', url: `/client/gallery` }
        ];
    }

    ngOnInit(): void {
        this.id = this.storageService.getIdParam('id-order-param');
        if (!this.id) {
            this.router.navigate(['/client']);
        } else {
            this.fetchGallery();
        }
    }

    fetchGallery() {
        let params = {
            idOrder: this.id
        };
        this.clientService.getGallery(params).subscribe({
            next: (r) => {
                this.listGallery = r.data.gallery;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    openDialogGallery(arr: any) {
        let param = {};
        if (arr) {
            param = { data: arr };
        }
        const dialogRef = this.dialog.open(DialogGalleryComponent, {
            width: '90%',
            maxWidth: '500px',
            height: 'auto',
            ...param
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) this.ngOnInit();
        });
    }

    deleteGallery(arr: any) {
        this.uploadService.deleteImage(arr).subscribe({
            next: (r: any) => {
                console.log(r);
                this.deleteFromDB(arr);
            },
            error: (e) => {
                this.deleteFromDB(arr);
                this._snackBar.open('Gambar tidak sesuai ketentuan');
            }
        });
    }

    deleteFromDB(arr) {
        let params = {
            id: arr.id
        };
        this.clientService.deleteGallery(params).subscribe({
            next: (r) => {
                if (r) this.ngOnInit();
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    openDialogDelete(arr: any) {
        const dialogRef = this.dialog.open(ConfirmationDeleteComponent, {
            width: '90%',
            maxWidth: '350px',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) this.deleteGallery(arr);
        });
    }
}
