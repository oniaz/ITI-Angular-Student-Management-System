import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  studentsData$ = this._studentsService.currentData$;

  constructor(private _studentsService: StudentsService, private router: Router) {}

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this._studentsService.deleteStudent(id);
    }
  }

  onView(id: number): void {
    this.router.navigate(['/student', id]);
  }

}
