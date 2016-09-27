import { Component } from 'angular2/core';
import {UrlService} from "./url.service";

@Component({
    selector: 'todo-rest',
    templateUrl: './app/rest.component.html',
    providers: [UrlService],
})

export class RestComponent{
    public hTitle: string = '';
    urlService: UrlService;
    public data: any;

    constructor(urlService:UrlService) {
        this.hTitle = 'Получение данных из mockapi';
        this.urlService = urlService;
    }

    getAll(){
        let xxx: any = this.urlService.getAllService().subscribe(
            (data: any) => {
                this.data = data
            },
           error => alert(error),
           () => console.log('Finished')
       );
        console.log(xxx);
    }
}