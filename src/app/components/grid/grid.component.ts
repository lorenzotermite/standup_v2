import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ICustomer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { MatSortModule } from '@angular/material/sort';

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
  @Input() columnsToDisplay?: IGridColumn<T>[];
  public displayedColumns: string[] = [];

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  ngOnInit(): void {
    if (this.columnsToDisplay) {
      this.displayedColumns = this.columnsToDisplay.map((c) => c.caption);
    }
    //bug upperCase fixato sovrascrivendo la funzione sortingDataAccessor
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string) => {
      if (typeof data[sortHeaderId] != 'number') {
        return data[sortHeaderId].toLocaleLowerCase();
      } else {
        return data[sortHeaderId];
      }
    };
  }

  //Poiché abbiamo aggiunto la variabile di riferimento del modello alla direttiva MatSort.
  //Ora fai riferimento al file ts del componente usando @ViewChild
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    //A volte il terzo stato (chiaro) creerà confusione, poiché gli utenti presumeranno che la colonna sarà in ordine crescente o decrescente. per disabilitarlo
    this.sort.disableClear = true;
    //Infine, assegna la direttiva MatSort alla proprietà di ordinamento dell'origine dati mat-table
    this.dataSource.sort = this.sort;
  }
}
