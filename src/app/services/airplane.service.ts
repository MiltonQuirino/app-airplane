import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Plane } from '../interfaces/plane';

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
      map(this.extractData) 
      );
  }

  delete(id): Observable<any> {
    return this.http.delete(`${environment.host}/api/plane/delete/${id}`).pipe(
      map(this.extractData));
  }


  create(plane:Plane): Observable<any> {
    return this.http.post(`${environment.host}/api/plane/create`, plane).pipe(
      map(this.extractData));
  }

  update(plane: Plane): any {
    return this.http.put(`${environment.host}/api/plane/update`, plane).pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}
