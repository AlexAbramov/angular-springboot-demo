import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private san: DomSanitizer){
    
  }

  transform(value: any, ...args: any[]): any {
    return this.san.bypassSecurityTrustHtml(value);
  }

}
