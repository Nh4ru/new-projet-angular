import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from 'src/app/services/settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    public settings: SettingsService,
    public http:HttpClient) { }

  loginForm =new FormGroup({
    user: new FormControl(''), password:new FormControl('')
  });

  login(){
    console.log(this.loginForm.value);
    this.http.post('https://httpbin.org/post', this.loginForm.value).subscribe(
      response => {
        console.log("le serveur répond", response);
      }
    )
  }

  ngOnInit(): void {
    this.settings.displayCarousel = false;
    this.loginForm = this.formBuilder.group({
      user:['', [Validators.required, Validators.minLength(3)]],
      password:['', [Validators.required, Validators.minLength(5)]]
    })
  }

}
