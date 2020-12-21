import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  blog: IBlog;
  blog_id: string;
  public blogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) { 
    this.blog_id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {

    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.blogService.getBlogById(this.blog_id).subscribe((data) => {
      this.blog = data;
      if (this.blog) {
        if (this.blog._id === '-1') {
          this.errorPage();
        }
        else {
          this.blog.content = "\n" + this.blog.content;
        }
      }
      else {
        this.errorPage();
      }
    });
  }

  updateBlog()
  {
    if (!this.blogForm.invalid) {
      let contentEle = this.blogForm.controls.content.value.replace(/^\s+|\s+$/g, '');

      const blog_data = {
        _id: this.blog_id,
        title: this.blogForm.controls.title.value,
        description: this.blogForm.controls.description.value,
        content: contentEle,
      }

      this.blogService.updateBlog(blog_data).subscribe((data) => {
        this.router.navigate(['/blog/view/' + this.blog._id]);
      });
    }
  }

  errorPage() {
    this.router.navigate(['/error']);
  }
}
