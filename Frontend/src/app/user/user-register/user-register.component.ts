import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm! : FormGroup;
  //user: any={};
  user! : User;
  userSubmitted : boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {

    /*
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      cpassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10)])
    },this.passwordMatchingValidator);

    */

    this.createRegistrationForm();
  }

  passwordMatchingValidator(fg: AbstractControl): { [key: string]: any }|null{
    return fg.get("password")?.value === fg.get("cpassword")?.value ? null:
            {notmatched: true };
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password:[null,[Validators.required, Validators.minLength(8)]],
      cpassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.minLength(10)]]
    },{validators: this.passwordMatchingValidator});
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get cpassword(){
    return this.registrationForm.get('cpassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  userData(): User{
    return this.user ={
      userName : this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  onSubmit(){
    console.log(this.registrationForm);
    this.userSubmitted=true;
    if (this.registrationForm.valid){
      //this.user = Object.assign(this.user, this.registrationForm.value);
      //this.userService.addUser(this.user);
      //this.addUser(this.user);
      //localStorage.setItem('Users', JSON.stringify(this.user));
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted=false;
      alertify.success('Congrates, you have successully registered!');

    }
    else{
      alertify.error('Provide all the requuired fields');
    }


  }

  /*
  addUser(user: any){
    let users=[];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    }
    else{
      users=[user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
  */

}
