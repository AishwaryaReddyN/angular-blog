import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: '',
      email: '',
      password: '',
      id: '',
    });
  }

  signup() {
    console.log('res' + JSON.stringify(this.signupForm.value));

    this.http
      .post<any>('http://localhost:3000/users', this.signupForm.value)
      .subscribe(
        (retrievedData) => {
          alert('signup successfull');
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
