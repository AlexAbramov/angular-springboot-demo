import { Injectable } from '@angular/core';
import { AppService } from '../app/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:string

  constructor(private appService:AppService, private http:HttpClient, private router:Router) { 

  }

  get isAuthenticated():boolean{return this.token!=null;}

  async login(cred:any):Promise<any>{
    const url=this.appService.getUrl("authApi","login");
    const res:any=await this.http.post(url, cred).toPromise()
    if(res.token){
      this.token=res.token
      this.appService.setToken(this.token)
    }
    return res;
  }

  logout(){
    this.token=null
    this.router.navigateByUrl('login')
  }

  setToken(token:string){
    this.token=token;
  }

  getToken():string{ return this.token}

}
