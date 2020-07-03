import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }
  allComments(id): void {
    console.log(id);
    this.postService.getCommentsOfSinglePost(id).subscribe(value  => console.log(value));
  }
}
