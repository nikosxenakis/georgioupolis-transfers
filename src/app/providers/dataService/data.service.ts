import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    handleError(error: any): Observable<any> {
        console.error(error);
        return throwError(() => error);
    }

    getData(url: string): Observable<any[]> {
        return this.http.get<any[]>(url).pipe(
            catchError(this.handleError)
        );
    }
}