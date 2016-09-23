import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UrlService{

    http;

    constructor(http: Http){}

    getAllService(){
        return this.http.get('http://57e24c2b9b6c4411002b4d6d.mockapi.io/api/films/:endpoint')
            .map(res => res.json());
    }

}