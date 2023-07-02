import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MyOrder } from '../../../../core/models/order.model';
import { OrderService } from '../../../../core/services/order.service';
import { StorageService } from '../../../../core/services/storage.service';
import { DialogChangeUrlComponent } from '../../components/dialog-change-url/dialog-change-url.component';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    orderList: MyOrder;

    constructor(
        private orderService: OrderService,
        private _snackBar: MatSnackBar,
        public dialog: MatDialog,
        private storageService: StorageService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.fetchMyOrder();
    }

    fetchMyOrder() {
        this.orderService.getMyOrder().subscribe({
            next: (r) => {
                this.orderList = r.data.order;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    openDialogChangeUrl(data: any) {
        const dialogRef = this.dialog.open(DialogChangeUrlComponent, {
            width: '90%',
            maxWidth: '400px',
            height: 'auto',
            data: data
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) this.ngOnInit();
        });
    }

    openUrl(url: string) {
        window.open(`https://dazelinv.com/${url}`, '_blank');
    }

    openDashboard(item: MyOrder) {
        this.storageService.setIdParam(item.id);
        this.router.navigate(['/client/dashboard']);
    }
}
