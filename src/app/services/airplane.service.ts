import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirplaneService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPlane(id): Observable<any> {
    return this.http.get(`${environment.host}/api/plane/get/${id}`).pipe(
      map(this.extractData));
  }


  getPlanes(): Observable<any> {
    return this.http.get(`${environment.host}/api/plane/get`).pipe(
      map(this.extractData));
  }

  delete(id): Observable<any> {
    return this.http.delete(`${environment.host}/api/plane/delete/${id}`).pipe(
      map(this.extractData));
  }


  create(plane): Observable<any> {
    return this.http.post(`${environment.host}/api/plane/create`, plane).pipe(
      map(this.extractData));
  }



  // getPlanes() {

  //   return this.http.get<any>(`${environment.host}/api/plane/get`).subscribe(
  //     data => {
  //       console.log(data);
  //       return data;
  //     },
  //     error => {
  //       console.error("Error getPlanes");
  //       return throwError(error);  // Angular 6/RxJS 6
  //     }
  //   );
  // }

  // try {
  //   source$.subscribe(nextFn, undefined, completeFn);
  // } catch (err) {
  //   handleError(err);
  // }

  private extractData(res: Response) {
    console.log(res);
    let body = res;
    return body || {};
  }
}
