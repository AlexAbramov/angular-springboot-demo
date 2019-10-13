import { Injectable } from '@angular/core';
import { AppService } from '../shared/app/app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

    constructor(private http:HttpClient, private appService:AppService) { }

    async getCompanies(): Promise<any> {
      const url=this.appService.getUrl("dashboardApi","companies")
      return await this.http.get(url).toPromise()
    }

}
