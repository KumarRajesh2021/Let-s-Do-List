import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-add-lets-do',
  templateUrl: './add-lets-do.component.html',
  styleUrls: ['./add-lets-do.component.css']
})
export class AddLetsDoComponent implements OnInit {
title:String;
@Output() addLetsDo:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
onSubmit(){
  const letdo={
    title:this.title,
    completed:false
  }
  this.addLetsDo.emit(letdo);
}
}
