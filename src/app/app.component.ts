import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Counter"
  version:string = "v1"
  number: number = 1

  viewRandomText(): void {
    this.number = this.number + 1
  }
  
}
