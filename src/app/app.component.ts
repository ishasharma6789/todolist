import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'isha';
  players=["virat","sachin", "dhoni","rohit"];
  message:string="Good Morning"
  inputValue:string="Initial value";
  

  todoItems: any[] = [
    {
      name: 'Breakfast',
      completed: false,
      subtasks: ['Mess', 'Marena', 'Restaurant']
    },
    // ... other tasks
  ];

  completedItems: any[] = [];
  newTask: string = ''; // Holds the new task input

  // Move completed tasks to the completedItems array
  updateCompletedItems() {
    this.completedItems = this.todoItems.filter(item => item.completed);
  }

  // Add a new task to the todoItems array
  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoItems.push({
        name: this.newTask,
        completed: false,
        subtasks: []
      });
      this.newTask = ''; // Clear the input field after adding
    }
  }

  // Delete an active task by index
  deleteTask(index: number) {
    if (index >= 0 && index < this.todoItems.length) {
      this.todoItems.splice(index, 1);
    }
  }

  // Delete a completed task by index
  deleteCompletedTask(index: number) {
    if (index >= 0 && index < this.completedItems.length) {
      this.completedItems.splice(index, 1);
    }
  }
}
