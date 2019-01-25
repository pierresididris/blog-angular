import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string ;
  @Input() postContent: string ;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  @Input() lesposts;


  ngOnInit() {
  }

  
}
