import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  dateFormat() {
    let months = [
      "Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug",
      "Sep", "Oct", "Nov", "Dec"
    ];
    let d = new Date();
    let day = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

  createBlog()
  {
    // console.log(this.blogForm);
    if(!this.blogForm.invalid)
    {
      const blog_data = {
        author: this.blogForm.controls.author.value,
        published: this.dateFormat(),
        title: this.blogForm.controls.title.value,
        description: this.blogForm.controls.description.value,
        content: this.blogForm.controls.content.value,
      }

      this.blogService.createBlog(blog_data).subscribe((data) => {
        this.router.navigate(['/blog/view/' + data._id]);
      });
    }
  }
}
