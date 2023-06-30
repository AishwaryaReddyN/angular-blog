import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: '',
      password: '',
    });
  }
  OnLogin() {
    this.http.get<any>('http://localhost:3000/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          console.log('a.email' + a.email);
          console.log(
            'this.loginForm.value.email' + JSON.stringify(this.loginForm.value)
          );
          console.log('----------');
          a.email === this.loginForm.value.email;
          // && a.password === this.loginForm.value.password;
        });
        console.log('usr data: ' + user);
        if (user) {
          alert('login success');
          this.loginForm.reset();
          this.router.navigate(['blog']);
        } else {
          alert('user not found');
        }
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }
}
