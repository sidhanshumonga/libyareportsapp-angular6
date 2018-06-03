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

  //urls required
  private dataseturl = x.BASE_URL + x.DATASETS_API;
  private userorguniturl = x.BASE_URL + x.USER_ORGUNIT;

  constructor(private http: HttpClient) { }

  //funtions required
  getDatasets(): Observable<any> {
    return this.http.get<any>(this.dataseturl);
  }

  getUserOu():Observable<any>{
     return this.http.get<any>(this.userorguniturl);
  }

  getChildOu(child:string): Observable<any>{
    return this.http.get<any>(x.BASE_URL+x.OU_CHILDREN_BASE+child+x.OU_CHILDREN_FILTER);
  }

}
