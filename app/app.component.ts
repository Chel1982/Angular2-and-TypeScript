import { Component } from 'angular2/core';
import { TodoListComponent } from './todo/todo-list.component';

@Component({
    selector: 'todo-app',
    templateUrl:'./app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent]
})

export class AppComponent{

    title: string;
    todos: string[];

    constructor(){
        this.title = 'Angular2Do';
        this.todos = [];
    }

    addToDo(title: string){
        this.todos.push(title);
    }
}