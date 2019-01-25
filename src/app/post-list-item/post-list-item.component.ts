import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  isAuth = false;

  @Input() postTitle: string ;
  @Input() postContent: string ;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor(){
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }

  onLoveIt(){
    this.postLoveIts ++;
    return this.postLoveIts;
  }

  onDontLoveIt() {
    this.postLoveIts --;
    return this.postLoveIts;
  }

  getColor(){
    if(this.postLoveIts > 0){
      return 'green';
    } else if(this.postLoveIts < 0){
      return 'red';
    }
  }

  ngOnInit() {
  }

}
