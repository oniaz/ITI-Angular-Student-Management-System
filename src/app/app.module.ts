import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { StudentTableComponent } from './components/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    // NavbarComponent,
    // StudentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
