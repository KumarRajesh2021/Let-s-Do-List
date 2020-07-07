import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {LetsDo} from '../module/LetsDo';
import { from, Observable } from 'rxjs';
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LetDoService {
   letdosUrl:string='https://jsonplaceholder.typicode.com/todos';
   letdoslimit='?_limit=5';
  constructor(private http:HttpClient) { }
//get letdo
getLetsdos():Observable<LetsDo[]>{
  return this.http.get<LetsDo[]>
  (`${this.letdosUrl}${this.letdoslimit}`);
}
//DeleteLetsDo
deleteLetsDo(letdo:LetsDo):Observable<LetsDo>{
  const url=`${this.letdosUrl}/${letdo.id}`
    return this.http.delete<LetsDo>(url,httpOptions);
  }
  //AddLetsDo
  addLetsDo(letdo:LetsDo):Observable<LetsDo>{
    return this.http.post<LetsDo>(this.letdosUrl,letdo,httpOptions);
  }
  //toggle completed
  toggleCompleted(letdo:LetsDo):Observable<any>{
       const url=`${this.letdosUrl}/${letdo.id}`
    return this.http.put(url,letdo,httpOptions);
  }
}
