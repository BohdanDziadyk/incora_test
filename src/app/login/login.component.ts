import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  form: FormGroup;
  username: FormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)])
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
  constructor(private userService: UserService, private router: Router) {
      this.form = new FormGroup({
        username: this.username,
        password: this.password
        }
      )
  }
  logIn(form){
    this.user = {username: form.controls.username.value, password: form.controls.password.value}
    return this.userService.logIn(this.user).subscribe(value => {
      alert(value)
      localStorage.setItem('authorized', 'true')
      this.router.navigate(['user_account'])
    }, err => {
      alert(err.error)
      localStorage.setItem('authorized', 'false')
    })
  }
  ngOnInit(): void {
  }

}
