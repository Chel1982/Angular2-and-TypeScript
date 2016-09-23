import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export class UrlService{

    private  endpoint_url: string = 'http://57e24c2b9b6c4411002b4d6d.mockapi.io/api/films/Film';
    http;
    constructor(http: Http){
        this.http = http;
    }

    getAllService(){
        return this.http.get(this.endpoint_url);
    }


}