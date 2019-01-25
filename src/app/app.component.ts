import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-angular';

  isAuth =  false;


  posts = [
    {
      title: "Mon premier Post",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      loveIts: 0,
      created_at: new Date
    },
    {
      title: "Mon deuxieme Post",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      loveIts: 0,
      created_at: new Date
    },
    {
      title: "Mon troisieme Post",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit, amet consectetur adipisicing elit.",
      loveIts: 0,
      created_at: new Date
    },
    {
      title: "Mon quatrieme Post",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      loveIts: 0,
      created_at: new Date
    },
  ];
}
