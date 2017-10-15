import { Injectable } from '@angular/core';

import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Rx";

import 'rxjs/Rx';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getData(url: string): Observable<any[]> {
        return this.http.get(url)
        .map(
            (response: Response) => {
                let res = response.json();
                return res;
            }
        )
        .catch(
            this.handleError
        );
    }

    handleError(error: any){
        console.log(error);
        return Observable.throw(error);
    }

}