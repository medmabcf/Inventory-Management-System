import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, catchError, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }
  addCategory(val: any) {
    return this.http
      .post(this.APIUrl + '/dashboard/categorys/', val)
      .pipe(
        catchError((error) => {
          // Handle the error here
          console.error('An error occurred:', error);
          const errorData = error.error;
          let message: string ="";
          for (const property in errorData) {
            console.log(property + ': ' + errorData[property]);
            message+=errorData[property]+"\n";
          }
        // Return an observable with the extracted error message
        return throwError(message);
        })
      );
  }
}

