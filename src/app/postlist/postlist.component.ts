import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../Services/postservice.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})

export class PostlistComponent  { 

posts : any[];

  constructor(private postService: PostserviceService) { }

ngOnInit(){ 
  this.posts = this.postService.posts;
}

}
