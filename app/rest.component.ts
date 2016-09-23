import { Component } from 'angular2/core';

@Component({
    selector: 'todo-rest',
    templateUrl: './app/rest.component.html'
    })

export class RestComponent{

    hTitle: string;

    constructor() {
        this.hTitle = 'Получение данных из mockapi';
    }

}