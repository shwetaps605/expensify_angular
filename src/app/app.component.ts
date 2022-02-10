import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Counter"
  version:string = "v1"
  number: number = 0

  incrementCount(): void {
    this.number = this.number + 1
  }

  decrementCount(): void {
    if(this.number == 0){
      alert("No buddy, not any more!")
      return
    }
    this.number = this.number - 1
  }

  resetCount(): void {
    this.number = 0
  }

}
