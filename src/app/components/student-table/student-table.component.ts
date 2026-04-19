import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  constructor(private _studentsService: StudentsService) { }
  studentsData$ = this._studentsService.currentData$;

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this._studentsService.deleteStudent(id);
    }
  }
}
