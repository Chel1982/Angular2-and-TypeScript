import { Component } from 'angular2/core';
import {UrlService} from "./url.service";

@Component({
    selector: 'todo-rest',
    templateUrl: './app/rest.component.html',
    providers: [UrlService],
})

export class RestComponent{

    hTitle: string;
    urlService: UrlService;

    constructor(urlService:UrlService) {
        this.hTitle = 'Получение данных из mockapi';
        this.urlService = urlService;
    }

    getAll(){
        return this.urlService.getAllService();
    }
}