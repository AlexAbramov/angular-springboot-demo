import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  {path: '',  component: LoginComponent  },
  {path: 'login',  component: LoginComponent  },
  {path: 'about',  component: AboutComponent  },
  {path: 'dashboard',  component: DashboardComponent  },
  {path: 'test',  component: TestComponent  },
  {path: 'reports',  component: ReportsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
