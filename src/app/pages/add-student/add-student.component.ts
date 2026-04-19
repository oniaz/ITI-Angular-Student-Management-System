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
  // constructor(private _studentsService: StudentsService) { }
  constructor(private _studentsService: StudentsService, private router: Router) { }

  studentsData$ = this._studentsService.currentData$;

  newStudent: Student = {
    id: 2,
    firstName: "Mariam",
    lastName: "Zaki",
    age: 20,
    gender: "Female",
    email: "mariam.zaki@email.com",
    phone: "01200000000",
    address: "45 Stanley St",
    city: "Alexandria",
    country: "Egypt",
    department: "Information Technology",
    level: 2,
    GPA: 3.8,
    enrollmentDate: "2024-09-15",
    isActive: true
  };

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
    // Construct the object
    const newStudent = {
      id: Math.floor(Math.random() * 10000), // Unique ID generator
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
