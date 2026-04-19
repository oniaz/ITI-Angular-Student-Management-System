import { Component } from '@angular/core';
// import { Student } from '../../models/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  constructor(private studentsService: StudentsService) { }
  studentsData$ = this.studentsService.currentData$;
}
