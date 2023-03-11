import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../model/customer';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

   Url = 'https://localhost:7004/api/Get/Customer';

 getCustomerUrl(): Observable<ICustomer[]> {
     return this.http.get<ICustomer[]>(this.Url);
   }

  getCustomer(): ICustomer[] {
    return [
      { id: 1, name: 'lorenzo', surname: 'A', email: 'lorenzo@gmail.com' },
      { id: 2, name: 'Angelo', surname: 'B', email: 'angelo@gmail.com' },
      { id: 3, name: 'Aarco', surname: 'C', email: 'marco@gmail.com' },
    ];
  }
}
