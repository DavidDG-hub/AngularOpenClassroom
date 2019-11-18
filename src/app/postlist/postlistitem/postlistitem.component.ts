import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})

export class PostlistitemComponent  {

  @Input() ptitle;
  @Input() pContent;
  @Input() pLovIts;
  @Input() created_at;

  // created: Date = new Date()

 
constructor () {
}

  dgclincr() {
   this.pLovIts +=1;
  }

  dgcldecr() {
    this.pLovIts -=1;
  }


}
