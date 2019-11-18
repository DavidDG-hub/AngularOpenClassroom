import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistitemComponent } from './postlist/postlistitem/postlistitem.component';
import { PostserviceService } from './Services/postservice.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PostserviceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
