import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as x from 'src/app/CONSTANTS';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AjaxserviceService {

 
  // private heroesUrl = x.BASE_URL + "dataSets.json?fields=name,id,attributeValues[value,attribute[id,name]]&paging=none"; 
  private heroesUrl = "http://localhost:8080/libya_dhis2/api/dataSets.json?fields=name,id,attributeValues[value,attribute[id,name]]&paging=none"; 

  constructor(private http: HttpClient) { }
    getDatasets (): Observable<any> {
      return this.http.get<any>(this.heroesUrl);
  }
}
