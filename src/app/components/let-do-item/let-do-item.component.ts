import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { LetsDo } from 'src/app/module/LetsDo';
import {LetDoService} from '../../services/let-do.service';
import { toUnicode } from 'punycode';
@Component({
  selector: 'app-let-do-item',
  templateUrl: './let-do-item.component.html',
  styleUrls: ['./let-do-item.component.css']
})
export class LetDoItemComponent implements OnInit {
@Input() letdo:LetsDo;
@Output() deleteLetsDo:EventEmitter<LetsDo> = new EventEmitter();

  constructor(private letdoService:LetDoService) { }

  ngOnInit() {
  }
//set dynamic classes
setClasses(){
  let classes={
          letdo:true,
          'is-complete':this.letdo.completed
  }
  return classes;
}
onToggle(letdo){
  //Toggle in UI
letdo.completed=!letdo.completed;
//Toggle on server
this.letdoService.toggleCompleted(letdo).subscribe(letdo=>
  console.log(letdo));
}
onDelete(letdo){
  this.deleteLetsDo.emit(letdo);
}
}
