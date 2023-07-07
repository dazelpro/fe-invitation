import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';
import { UploadService } from '../../../../core/services/upload.service';

@Component({
    selector: 'app-dialog-profile',
    templateUrl: './dialog-profile.component.html',
    styleUrls: ['./dialog-profile.component.css']
})
export class DialogProfileComponent implements OnInit {
    id;
    public form = {
        idOrder: '',
        name: '',
        nickName: '',
        parentName: '',
        address: '',
        otherInformation: '',
        instagramLink: '',
        imageUrl: ''
    };

    public formValid = {
        name: true,
        nickName: true
    };

    ready = false;

    imageChangedEvent: any = '';
    croppedImage: any = '';
    generatedImage: File = null as any;

    imageNull = true;
    imageChanges = false;
    editMode = false;
    originalFileName: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataDialog: any,
        public dialogRef: MatDialogRef<DialogProfileComponent>,
        private clientService: ClientService,
        private uploadService: UploadService,
        private storageService: StorageService,
        private _snackBar: MatSnackBar,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        if (this.dataDialog) {
            this.setForm();
        }
        this.form.idOrder = this.storageService.getIdParam('id-order-param');
    }

    setForm() {
        this.id = this.dataDialog.id;
        this.form.name = this.dataDialog.name;
        this.form.nickName = this.dataDialog.nickName;
        this.form.parentName = this.dataDialog.parentName;
        this.form.address = this.dataDialog.address;
        this.form.otherInformation = this.dataDialog.otherInformation;
        this.form.instagramLink = this.dataDialog.instagramLink;
        this.form.imageUrl = this.dataDialog.imageUrl;
        this.form.imageUrl ? (this.editMode = true) : (this.editMode = false);
    }

    validator() {
        this.formValid.name = this.form.name ? true : false;
        this.formValid.nickName = this.form.nickName ? true : false;

        if (this.formValid.name && this.formValid.nickName) {
            this.ready = true;
        } else {
            this.ready = false;
        }
    }

    submit() {
        this.validator();
        if (this.ready) {
            this.handleSubmit();
        }
    }

    async handleSubmit() {
        if (this.imageChanges) {
            //upload gambar dulu baru save ke db
            let FrmData = new FormData();
            FrmData.append('image', this.generatedImage, this.generatedImage.name);
            this.uploadService.upload(FrmData).subscribe({
                next: (r: any) => {
                    this.form.imageUrl = r.url;
                    this.upsertProfile();
                },
                error: (e) => {
                    this._snackBar.open('Gambar tidak sesuai ketentuan');
                }
            });
        } else {
            this.upsertProfile();
        }
    }

    upsertProfile() {
        const body = { id: this.id, ...this.form };
        this.clientService.upsertProfile(body).subscribe({
            next: (r) => {
                this.close(true);
            },
            error: (e) => {
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    fileChangeEvent(event: any): void {
        if (event.target.files[0].size > 3000000) {
            this._snackBar.open('Ukuran gambar melebihi 3 MB', '', {
                duration: 2000
            });
        } else {
            this.imageChangedEvent = event;
            this.imageNull = false;
            this.imageChanges = true;
            this.originalFileName = event.target.files[0].name;
        }
    }
    async imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;

        const imageBlob = await this.base64ToBlob(this.croppedImage);
        const imageFile: File = new File([imageBlob], this.originalFileName, {
            type: 'image/jpeg'
        });
        this.generatedImage = imageFile;
    }

    base64ToBlob(dataURI: any, contentType = 'image/jpeg', sliceSize = 512) {
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);
        else byteString = unescape(dataURI.split(',')[1]);
        let ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: contentType });
    }

    imageLoaded(event) {
        // show cropper
    }

    cropperReady() {
        // cropper ready
    }

    loadImageFailed() {
        // show message
    }

    removeImage() {
        this.editMode = false;
    }

    close(arr: boolean) {
        this.dialogRef.close(arr);
    }
}
