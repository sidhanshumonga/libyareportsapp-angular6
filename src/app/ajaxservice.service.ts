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
  private dataseturl = x.BASE_URL + x.DATASETS_API;
  constructor(private http: HttpClient) { }
  getDatasets(): Observable<any> {
    return this.http.get<any>(this.dataseturl);
  }
}
