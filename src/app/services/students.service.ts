import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentsData = new BehaviorSubject<Student[]>(
    [
      {
        id: 1,
        firstName: "Omnia",
        lastName: "Mohamed",
        age: 25,
        gender: "Female",
        email: "omnia@email.com",
        phone: "01008800000",
        address: "12 Main Street",
        city: "Alexandria",
        country: "Egypt",
        department: "Computer Science",
        level: 4,
        GPA: 3.8,
        enrollmentDate: "2019-09-01",
        isActive: true
      }
    ]
  );
  currentData$ = this.studentsData.asObservable();

  constructor() { }

  addStudent(newData: Student[]) {
    this.studentsData.next(newData);
    console.log("studentsData updated:", this.studentsData.value);
  }

  getStudentById(id: number): Student | undefined {
    return this.studentsData.value.find(s => s.id === id);
  }

  deleteStudent(id: number): void {
    const currentStudents = this.studentsData.value;
    const updatedStudents = currentStudents.filter(student => student.id !== id);
    this.studentsData.next(updatedStudents);
    console.log(`Student ${id} deleted.`);
  }
}
