
import { Component } from '@angular/core';
interface Employee {
  name: string;
  task: string;
  id: any;
  completed: string;
  assigndate: Date;
  pending:string;
  targetdate:Date
}

const EMPLOYEES: Employee[] = [
  {
    id: 10256,
    name: 'Amit',
    task: 'To work on RPA',
    completed: '',
    assigndate: new Date(2024, 11, 20),
    pending:'Yes',
    targetdate:new Date(2024,11,20),
  },
  {
    id: 16598,
    name: 'Aman',
    task: 'To work on API',
    completed: '',
    assigndate: new Date(2024, 11, 20),
    pending:'Yes',
    targetdate:new Date(2024,11,20),
  },
  {
    id: 17845,
    name: 'Samar',
    task: 'To work on Angular',
    completed: '',
    assigndate: new Date(2024, 11, 20),
    pending:'Yes',
    targetdate:new Date(2024,11,20),
  },
  {
    id: 19866,
    name: 'Sunny',
    task: 'To work on React',
    completed: '',
    assigndate: new Date(2024, 11, 20),
    pending:'Yes',
    targetdate:new Date(2024,11,20),
  }
];

@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrl: './to-do-table.component.scss'
})
export class ToDoTableComponent {
	employee = EMPLOYEES;
}
