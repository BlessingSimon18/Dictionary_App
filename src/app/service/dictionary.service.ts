import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=bb8a8e37-ca11-4570-9191-bdc5c655a8ce';

  public getJsonValue: any;
  public postJsonValue: any;

  // word: string = " ";
  

  // getDictionaryData(name?: string): any {
  //   if(name){
  //     this.word = name
  //   }
  //   let myResponse = this.apiUrl  + this.word;
  //   return myResponse
  // }

  // getSearchWord(data:any):Observable<any>
  // {
  //   console.log(data, 'word#');
  //   return this.http.get(`${this.apiUrl}&query=${data.word}`);
    
  // }

}
