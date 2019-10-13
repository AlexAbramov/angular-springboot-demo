import { Injectable } from '@angular/core';
import * as appJson from '../../../assets/json/app.json'
import { DialogService } from '../dialog/dialog.service';
import { Router, Navigation, NavigationExtras } from '@angular/router';
import { EvvError } from './evv-error';
import { HttpHeaders } from '@angular/common/http';
const appOptions:any=appJson['default']

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private token:string
  
  getUrl(api:string, path:string):string{
    return appOptions[api]+path;
  }

  get topMenu():[]{
    return appOptions.topMenu
  }

  get leftMenu():[]{
    return appOptions.leftMenu
  }

  constructor(private dialogService:DialogService, private router:Router) { 
    
  }

  getHeaders():HttpHeaders{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token? `Bearer ${this.token}`:''
      })
      return headers    
  }

  getCurrentNavigation():Navigation{
    return this.router.getCurrentNavigation()
  }   

  error(er){
    let msg='Error '
    if(er instanceof EvvError){
      msg+=er.errorCode
      if(er.message) msg+=':'+er.message
    }
    else{
      msg+=er.toString()      
    }
    this.alert(msg)
  }

  alert(obj:any){
    const msg=(obj instanceof String) ? obj.toString() : JSON.stringify(obj)
    this.dialogService.alert(msg)
    
  }

  navigate(url:string, extras?: NavigationExtras){
    this.router.navigateByUrl(url, extras)
  }

  setToken(token:string){this.token=token}

}
