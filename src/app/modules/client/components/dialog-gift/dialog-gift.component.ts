import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../../../environments/environment';
import { MasterBank } from '../../../../core/models/master.model';
import { ClientService } from '../../../../core/services/client.service';
import { MasterService } from '../../../../core/services/master.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-dialog-gift',
    templateUrl: './dialog-gift.component.html',
    styleUrls: ['./dialog-gift.component.css']
})
export class DialogGiftComponent implements OnInit {
    id;
    mode = 'BANK' || 'ADDRESS';
    imgPatch = environment.api.cdn;
    bankMasterList: MasterBank;
    public form = {
        idOrder: '',
        type: '',
        bankName: '',
        bankLogo: '',
        bankAccountName: '',
        bankAccountNumber: '',
        giftName: '',
        giftAddress: '',
        status: 1
    };

    public formValid = {
        bankAccountName: true,
        bankAccountNumber: true,
        giftName: true,
        giftAddress: true
    };

    ready = false;
    constructor(
        @Inject(MAT_DIALOG_DATA) public dataDialog: any,
        public dialogRef: MatDialogRef<DialogGiftComponent>,
        private clientService: ClientService,
        private masterService: MasterService,
        private _snackBar: MatSnackBar,
        private storageService: StorageService
    ) {
        this.mode = this.dataDialog.mode;
    }

    ngOnInit(): void {
        if (this.mode === 'BANK') {
            this.fetchBankMaster();
            this.form.bankName = 'Bank BCA';
            this.form.bankLogo = 'https://cdn.dazelpro.com/uploads/dazelinv/bank/bca.png';
        }
        if (this.dataDialog.item) {
            this.setForm();
        }
        this.form.idOrder = this.storageService.getIdParam('id-order-param');
        this.form.type = this.mode;
    }

    fetchBankMaster() {
        let params = {
            status: 1
        };
        this.masterService.getBank(params).subscribe({
            next: (r) => {
                this.bankMasterList = r.data.bank;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    chooseBank(name: string, logo: string) {
        this.form.bankName = name;
        this.form.bankLogo = logo;
    }

    setForm() {
        this.id = this.dataDialog.item.id;
        if (this.mode === 'BANK') {
            this.form.bankName = this.dataDialog.item.bankName;
            this.form.bankLogo = this.dataDialog.item.bankLogo;
            this.form.bankAccountName = this.dataDialog.item.bankAccountName;
            this.form.bankAccountNumber = this.dataDialog.item.bankAccountNumber;
        } else {
            this.form.giftName = this.dataDialog.item.giftName;
            this.form.giftAddress = this.dataDialog.item.giftAddress;
        }
    }

    close(arr: boolean) {
        this.dialogRef.close(arr);
    }

    submit() {
        this.validator();
        if (this.ready) {
            this.handleSubmit();
        }
    }

    validator() {
        if (this.mode === 'BANK') {
            this.formValid.bankAccountName = this.form.bankAccountName ? true : false;
            this.formValid.bankAccountNumber = this.form.bankAccountNumber ? true : false;
            if (this.formValid.bankAccountName && this.formValid.bankAccountNumber) {
                this.ready = true;
            } else {
                this.ready = false;
            }
        } else {
            this.formValid.giftName = this.form.giftName ? true : false;
            this.formValid.giftAddress = this.form.giftAddress ? true : false;
            if (this.formValid.giftName && this.formValid.giftAddress) {
                this.ready = true;
            } else {
                this.ready = false;
            }
        }
    }

    handleSubmit() {
        const body = { id: this.id, ...this.form };
        this.clientService.upsertGift(body).subscribe({
            next: (r) => {
                this.close(true);
            },
            error: (e) => {
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
