import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ICustomer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

export interface IGridColumn<T> {
  caption: string;
  field: keyof T;
}
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent<T> {
  @Input() dataSource = new MatTableDataSource<T>([]);
  @Input() columns?: string[];
}
