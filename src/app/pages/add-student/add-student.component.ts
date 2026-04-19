import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private studentsService: StudentsService) { }

  studentsData$ = this.studentsService.currentData$;

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

  addStudent() {
    const updated = [...this.studentsService['studentsData'].value, this.newStudent];
    this.studentsService.updateData(updated);
  }

}
