import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  title?: any;
  content?: any;

  constructor(private postservice: PostService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const new_post = {
      title: this.title,
      content: this.content,
    };
    this.postservice
      .addPost(new_post)
      .subscribe(() => this.router.navigate(['/blog']));
  }
}
