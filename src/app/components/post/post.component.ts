import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post1: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onDelete() {
    this.postService.deletePost(this.post1.id).subscribe();
  }
}
