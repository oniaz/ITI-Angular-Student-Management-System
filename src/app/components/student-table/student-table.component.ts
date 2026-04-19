import { Component } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  students: Student[] = [
    {
      id: 1,
      firstName: "Ali",
      lastName: "Hassan",
      age: 21,
      gender: "Male",
      email: "ali.hassan@email.com",
      phone: "01000000000",
      address: "12 Main Street",
      city: "Cairo",
      country: "Egypt",
      department: "Computer Science",
      level: 3,
      GPA: 3.2,
      enrollmentDate: "2023-09-01",
      isActive: true
    }
  ]
}
