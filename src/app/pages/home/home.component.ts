import { Component, OnInit } from '@angular/core';
import { Observable, Subject, distinctUntilChanged, filter, map, of, switchAll, switchMap } from 'rxjs';
import { DictionaryService } from 'src/app/service/dictionary.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public words:any = [];
  public getJsonValue: any;
  wordearch:any='';
  searchList :any= [];
  dictionary$: Observable<any> | undefined;
  searchWord=""



  constructor(private http: HttpClient, private service:DictionaryService) { }

  ngOnInit(): void {
    this.search();
   
    this.dictionary$ = of(this.service.getJsonValue);
    console.log(this.dictionary$);

    // this.searchList
    //   .pipe(
    //     filter(value => !value || value !== ''),
    //     distinctUntilChanged(),
    //     filter(value => value !== ''),
    //     map((value) => { return value})
    //   )

    // this.searchList.length.pipe(filter(value => value != ''));
    
  }

  public getMethod(){
    this.http.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${this.wordearch}?key=bb8a8e37-ca11-4570-9191-bdc5c655a8ce`)
      .subscribe((data) => {
        console.log(data);
        this.getJsonValue=data;
        
      })
  };
  
  update(word: string) {
    if (word) {
      if(this.searchList.length==0){
        this.searchList.push(word);
      }else{
        if (!this.searchList.includes(word)) {
          this.searchList.push(word);
        }
      }

      this.wordearch=word;
      fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${this.wordearch}?key=bb8a8e37-ca11-4570-9191-bdc5c655a8ce`)
      .then((response) => response.json())
      .then((json)=>   this.words = json);
     
    }
  }

  searchForm:FormGroup = new FormGroup({
    word:new FormControl(' ')
  });


  word:any;

  searchKey(data: string) {
    this.searchWord = data;
    this.search();
  }

  search(){
    if (this.searchWord !== this.searchList){
    this.words = this.searchWord === ""? this.searchList :
    this.searchList.filter((element: any )  => {
      return element.name == this.searchWord;
    });
  }
  }
 
  
  // dictionary: Observable<any> = this.word.pipe(
  //   switchMap(word => this.service.getJsonValue(word)),
  //   catchError(errorResponse => {
  //     alert("oh no");
  //     return of(null);
  //   }
  //   )
  // )
  

}


