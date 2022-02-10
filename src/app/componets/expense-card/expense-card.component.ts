import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss']
})
export class ExpenseCardComponent implements OnInit {

  @Input() count!: number
  @Output() onReset = new EventEmitter()

  total: number = 100

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onReset.emit()
  }

}
