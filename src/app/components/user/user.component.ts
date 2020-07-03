import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {PostService} from '../../services/post/post.service';
import {CommentService} from '../../services/comments/comment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private postService: PostService, private commentService: CommentService) { }

  ngOnInit(): void {
  }

  getUserPosts(userId): void {
    console.log(userId);
    this.postService.getPostsToUser(userId).subscribe(value => {
      console.log(value);
      value.map(cId => {
        console.log(cId.id);
        this.commentService.getCommentsToPost(cId.id).subscribe(comment => console.log(comment));
      });
    });
  }

}
