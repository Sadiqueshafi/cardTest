import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import{} from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  gettingData: BehaviorSubject<any> = new BehaviorSubject(null);
  public url :any[]=[];
  constructor(private http:HttpClient) { }

  getDataonce(){
    const url ='https://api.first.org/data/v1/news';
      this.http.get(url).subscribe(
        (response: any) => {
          this.gettingData.next(response.data as any[]);
          console.log(this.gettingData)
          console.log(response.data)
          // this.url =response.data.link;
      // console.log(this.url)
          // console.log(this.data[0].storeId)
        },
        (err) => {
          console.log(err);
        }
      );

  }

  getlistData(): Observable<any[]> {
    return this.gettingData.asObservable();
  }

  getData():Observable<any>{
    const url = 'https://api.first.org/data/v1/news';
    return this.http.get<any>(url)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }
  postData(url:any, query:any):Observable<any>{
    // const urls = url+query;
    return this.http.post(url,query).pipe(
      catchError(err => this.handleError(err))
    );
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error.msg;
    }
    return throwError(errorMessage);
  }
}
