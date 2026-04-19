import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private _studentsService: StudentsService, private router: Router) { }

  studentsData$ = this._studentsService.currentData$;

  newStudent: Student = {
    id: Math.floor(Math.random() * 10000),
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

  addStudentGahez() {
    const updated = [...this._studentsService['studentsData'].value, this.newStudent];
    this._studentsService.addStudent(updated);
  }

  addStudent(
    firstName: string, lastName: string, age: string, gender: string,
    email: string, phone: string, address: string, city: string,
    country: string, department: string, level: string, GPA: string,
    enrollmentDate: string, isActive: boolean
  ) {
    const newStudent = {
      id: Math.floor(Math.random() * 10000),
      firstName,
      lastName,
      age: Number(age),
      gender,
      email,
      phone,
      address,
      city,
      country,
      department,
      level: Number(level),
      GPA: Number(GPA),
      enrollmentDate,
      isActive
    };

    const updated = [...this._studentsService['studentsData'].value, newStudent];
    this._studentsService.addStudent(updated);

    this.router.navigate(['/students']);
  }

}
