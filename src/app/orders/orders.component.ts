import { Order, DataService } from './../data/data.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this. orders$ = this.dataService.orderList$;
  }

}
