import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

export interface IGridColumn<T> {
  caption: string;
  field: keyof T;
}
@Component({
  selector: 'app-customer-browse',
  templateUrl: './customer-browse.component.html',
  styleUrls: ['./customer-browse.component.scss'],
})
export class CustomerBrowseComponent {
  // public customer: ICustomer[];
  public customer = new MatTableDataSource<ICustomer>([]);
  public displayedColumns: IGridColumn<ICustomer>[] = [
    { caption: 'id', field: 'id' },
    { caption: 'name', field: 'name' },
    { caption: 'surname', field: 'surname' },
    { caption: 'email', field: 'email' },
  ];

  constructor(private _customerService: CustomerService) {
   // this.customer.data = _customerService.getCustomer();
  }

  ngOnInit(): void {
    this._customerService.getCustomerUrl().subscribe((res: ICustomer[]) => {
      this.customer.data = res;
   
    });
  }
}
