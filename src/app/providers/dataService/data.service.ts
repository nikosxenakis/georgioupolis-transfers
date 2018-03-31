import { Injectable } from '@angular/core';

import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Rx";

import 'rxjs/Rx';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    resolveRespone(response: Response): Observable<Response> {
        return response.json();
    }

    handleError(error: any): Observable<any> {
        console.error(error);
        return Observable.throw(error);
    }

    getData(url: string): Observable<any[]> {
        return this.http.get(url)
        .map(this.resolveRespone)
        .catch(this.handleError)
    }



}