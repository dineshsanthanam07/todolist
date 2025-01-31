import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
taskname='';
tasks:String[]=[];
ngOnInit(): void {
  const savedTasks = localStorage.getItem('mytask');
  if (savedTasks) {
    this.tasks = JSON.parse(savedTasks);
  }
}

add(){
  if (this.taskname) { 
    if (this.tasks) {
      this.tasks.push(this.taskname.trim());
    } else {
      this.tasks = [this.taskname.trim()];
    }
    localStorage.setItem('mytask', JSON.stringify(this.tasks));
    
    this.taskname = '';
  

}


}
}
