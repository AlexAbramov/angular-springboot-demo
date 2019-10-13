import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { Router } from '@angular/router';
import { AppService } from './shared/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  title = 'demo-portal';
  get isAuthenticated():boolean{return this.authService.isAuthenticated}
  get topMenu():[]{return this.appService.topMenu}
  get leftMenu():[]{return this.appService.leftMenu}
  
  constructor(private appService:AppService, private authService:AuthService, private router: Router){
    
  }

  menuItemClick(item:any){
    this.router.navigate([item.path]);
  }

  logout(){
    this.authService.logout();
  }

  isSelected(item:any):boolean{
    const url=this.router.url
    return item.path && (url.endsWith(item.path) || url.includes(item.path+'/'))
  }

}
