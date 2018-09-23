import { Injectable } from '@angular/core';
import { Student } from '../schemas/student';


@Injectable()
export class helperService {

   public studentSignUp: Student= new Student();


   setStudentOfSignUp(student: Student){
      this.studentSignUp = student;
   }


   getStudentOfSignUp(): Student{
      return this.studentSignUp;
   }


}
