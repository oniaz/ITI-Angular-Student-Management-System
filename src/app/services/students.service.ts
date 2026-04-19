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
  );
  currentData$ = this.studentsData.asObservable();

  constructor() { }

    updateData(newData: Student[]) {
    this.studentsData.next(newData);
    console.log("studentsData updated:", this.studentsData.value);
  }
}
