import { Component, OnInit } from '@angular/core';

export interface Transaction {
  id: string;
  cantidad: string;
  producto: string;
  valor: number;
}

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {
  displayedColumns = ['id', 'cantidad', 'producto', 'valor'];
  transactions: Transaction[] = [
    { id: '1', cantidad: '6', producto: 'Beach ball', valor: 4},
    { id: '2', cantidad: '7', producto: 'Towel', valor: 5},
    { id: '3', cantidad: '8', producto: 'Frisbee', valor: 2},
    { id: '4', cantidad: '9', producto: 'Sunscreen', valor: 4},
    { id: '5', cantidad: '10', producto: 'Cooler', valor: 25},
    { id: '6', cantidad: '11', producto: 'Swim suit', valor: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }
}


