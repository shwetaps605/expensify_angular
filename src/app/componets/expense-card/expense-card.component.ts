import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss']
})
export class ExpenseCardComponent implements OnInit {

  total: number = 100

  constructor() { }

  ngOnInit(): void {
  }

}
