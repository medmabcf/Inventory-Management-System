import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from 'src/app/modules/ProductInf';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly APIUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

  addProduct(val: any) {
    console.log(val);
    return this.http
      .post(this.APIUrl + '/dashboard/products/', val)
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
  getProductsList(): Observable<any[]> {
    return this.http.post<any[]>(this.APIUrl + '/dashboard/products/get_all/', {});
  }



//Update product 

updateProduct(val:any,id:number) {
  return this.http.put(this.APIUrl + '/dashboard/products/'+id.toString()+'/', val)
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
//delete product 
deleteProduct(val:any,id:number) {
  console.log(val+"vlfevmlf");
return this.http.delete(this.APIUrl + '/dashboard/products/'+id.toString()+'/',val)
.pipe(
catchError((error) => {
// Handle the error here
// console.error('An error occurred:', error);
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