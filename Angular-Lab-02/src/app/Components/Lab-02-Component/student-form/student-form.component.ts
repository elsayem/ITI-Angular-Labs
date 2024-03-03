import { Component } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  name: string = '';
  age: number = 0;
  phoneNumber: string = "";
  selectedAddress:string="";

  AllStudentData:any[]=[];

  SendValues(e: Event) {
    e.preventDefault();
    if (!this.NameValidation || !this.AgeValidation || !this.PhoneValidation) {
      console.log('Form data is not valid')
      return; 
    }

    let formData = {
      name:this.name,
      age:this.age,
      phone:this.phoneNumber,
      address:this.selectedAddress

    }
    
    console.log(this.name, this.age, this.phoneNumber, this.selectedAddress)
    this.AllStudentData.push(formData);
    this.name =''
    this.age = 0;
    this.phoneNumber=''
    this.selectedAddress=''
  }

  get NameValidation(){
    return this.name.length >= 4
  }

  get NameTouched(){
    return this.name != '';
  }

  get AgeValidation(){
    return this.age>= 10 && this.age <=17;
  }

  get AgeTouched(){
    return this.age != 0;
  }


  get PhoneValidation(){
   const  phoneRegex = /^(010|011|012|015)\d{8}$/;
   return phoneRegex.test(this.phoneNumber)
  }


  get PhoneTouched(){
    return this.phoneNumber!="";
  }

  Address: string[] = ['Alex', 'Cairo', 'Giza'];

}
