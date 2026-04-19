import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    // 1. Get the ID from the URL params
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // 2. Fetch that specific student from the service
    this.student = this.studentsService.getStudentById(id);
  }
}
