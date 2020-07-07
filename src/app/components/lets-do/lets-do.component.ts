import { Component, OnInit } from '@angular/core';
import {LetsDo} from '../../module/LetsDo';
import {LetDoService} from '../../services/let-do.service';
@Component({
  selector: 'app-lets-do',
  templateUrl: './lets-do.component.html',
  styleUrls: ['./lets-do.component.css']
})
export class LetsDoComponent implements OnInit {
letsdos:LetsDo[];
  constructor(private letdoService:LetDoService) { }

  ngOnInit() {
    this.letdoService.getLetsdos().subscribe(letsdos=>{
      this.letsdos=letsdos;
    });
    
  }
deleteLetsDo(letdo:LetsDo){
  // Remove from UI
  this.letsdos=this.letsdos.filter(t => t.id !== letdo.id);
  // Remove from Server
  this.letdoService.deleteLetsDo(letdo).subscribe();
}
addLetsDo(letdo:LetsDo){
  this.letdoService.addLetsDo(letdo).subscribe(letdo =>{
    this.letsdos.push(letdo);
  })
}
}
