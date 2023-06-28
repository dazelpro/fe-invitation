import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyOrder } from '../../../../core/models/order.model';
import { OrderService } from '../../../../core/services/order.service';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    orderList: MyOrder;

    constructor(private orderService: OrderService, private _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.fetchMyOrder();
    }

    fetchMyOrder() {
        this.orderService.getMyOrder().subscribe({
            next: (r) => {
                console.log(r);
                this.orderList = r.data.order;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
