import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Order {
  id?: string;
  address: string;
  size: string;
  time: string;
  topping: string[];
  type: string;
  crust: string;
  status: string;
  sauce?: string;
}

@Injectable()
export class DataService {

  private orderCollection: AngularFirestoreCollection<Order>;
   orderList$: Observable<Order[]>;
  constructor(private db: AngularFirestore) {
    this.orderCollection = db.collection<Order>('orders');
    this.orderList$ = this.orderCollection.valueChanges();
   }
}
