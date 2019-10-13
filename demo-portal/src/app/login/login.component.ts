import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { DialogService } from '../shared/dialog/dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AppService } from '../shared/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cred = {
    name:'',
    psw:''
  }


  isBusy=false
  message:string
  errorMessage:string

  constructor(private router: Router, private authService: AuthService, private appService: AppService) { }

  ngOnInit() {
  }

  async login(): Promise<any> {
    try {
      this.message=null;
      this.errorMessage=null;
      this.isBusy=true;
      const res = await this.authService.login(this.cred)
      if (this.authService.isAuthenticated) {
        this.message=null;
        this.appService.navigate("dashboard");
      } else {
        this.message="Invalid credentials";
      }
    }
    catch (er) {
        this.errorMessage="Connection failed";
    }
    finally{
      this.isBusy=false
    }
  }
}
