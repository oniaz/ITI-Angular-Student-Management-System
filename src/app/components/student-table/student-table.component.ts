import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  @Input() students: Student[] | null = [];
  @Output() deleteStudent = new EventEmitter<number>();
  @Output() viewStudent = new EventEmitter<number>();

  constructor() { }

  onDelete(id: number): void {
    this.deleteStudent.emit(id);
  }

  onView(id: number): void {
    this.viewStudent.emit(id);
  }
}
