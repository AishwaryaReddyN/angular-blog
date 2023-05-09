import { Component, Input, OnInit } from '@angular/core';
import { Posts } from '../../mock-posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;

  @Input() colClass: any;

  constructor(private postservice: PostService) {}

  ngOnInit(): void {
    this.postservice
      .getPosts()
      .subscribe((retrievedData) => (this.posts = retrievedData));
  }
}
