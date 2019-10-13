import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertComponent } from './alert/alert.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  alert(msg:string):Observable<any>{
    const dialogRef=this.dialog.open(AlertComponent);
    dialogRef.componentInstance.message=msg;
    return dialogRef.afterClosed()

  }
}
