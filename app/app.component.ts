import { Component } from 'angular2/core';

@Component({
    selector: 'todo-app',
    templateUrl:'./app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent{

    title: string;
    todos: string[];

    constructor(){
        this.title = 'Angular2Do';
        this.todos = ['dsfa'];
    }
}