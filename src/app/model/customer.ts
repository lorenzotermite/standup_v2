export interface ICustomer {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export class Customer implements ICustomer {
  id: number;
  name: string;
  surname: string;
  email: string;

  constructor(id: number, name: string, surname: string, email: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
  }
}
