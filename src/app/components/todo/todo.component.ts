import {Component, ElementRef, ViewChild,OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task = '';
  tasks = [];

    @ViewChild('filter') filter: ElementRef;

    ngOnInit() {
        this.getTasks();
    }

  constructor(private todoService: TodoService) {
  }


  submitTask(t: string) {
    this.todoService.postData({name: t}).subscribe((task1) => {
        this.task = '';
        this.getTasks();
      },
      error => console.log(error));
  }

  removeTask(i) {
    this.todoService.removeData({index: i}).subscribe((tasks: any) => this.tasks = tasks.list,
      error => console.log(error));
  }

  getTasks() {
    this.todoService.getData().subscribe((tasks: any) => {
        this.tasks = tasks.list;
      },
      error => console.log(error));
  }

}



