import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input('tasks') tasks: any;
  deletetask(index:number){
    
    this.tasks.splice(index,1)
   
  
    localStorage.setItem("mylist",JSON.stringify(this.tasks))

  }

}
