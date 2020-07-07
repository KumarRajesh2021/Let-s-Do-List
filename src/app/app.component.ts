import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String = 'Brad';

  constructor(){
    this.changeName("John");
  }
  changeName(name:String):void{
    this.name=name;
  }
}
