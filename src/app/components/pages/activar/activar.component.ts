import { Component, OnInit } from '@angular/core';

export interface Transaction {
  id: string;
  cantidad: string;
  producto: string;
  valor: number;
}

@Component({
  selector: 'app-activar',
  templateUrl: './activar.component.html',
  styleUrls: ['./activar.component.css']
})
export class ActivarComponent {
  displayedColumns = ['id', 'cantidad', 'producto', 'valor'];
  transactions: Transaction[] = [
    { id: '1', cantidad: '1', producto: 'Beach ball', valor: 4},
    { id: '2', cantidad: '5', producto: 'Towel', valor: 5},
    { id: '3', cantidad: '3', producto: 'Frisbee', valor: 2},
    { id: '4', cantidad: '1', producto: 'Sunscreen', valor: 4},
    { id: '5', cantidad: '10', producto: 'Cooler', valor: 25},
    { id: '6', cantidad: '12', producto: 'Swim suit', valor: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

}
