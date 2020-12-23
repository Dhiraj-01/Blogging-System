import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnChanges, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit, OnChanges {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) { }

  blogs: IBlog[];
  copyBlogs: IBlog[];
  cnt:number = 0;
  
  ngOnInit(): void {
    this.cnt = 0;
    this.blogs = [];
    this.copyBlogs = [];

    // let user = this.route.snapshot.queryParamMap.get('user');
    // if (user) {
    //   console.log(user);
    //   this.blogService.getBlogsByUser(user).subscribe((data) => {
    //     this.blogs = data;
    //   });
    // }
    // else {
    //   this.blogService.getBlogs().subscribe((data) => {
    //     this.blogs = data;
    //   });
    // }

    // console.log("inside");
  
    this.route.queryParams.subscribe((params) => {
      if (params.user && params.search) {
        console.log("both");
        this.blogService.getBlogsByUser(params.user).subscribe((data) => {
          this.blogs = this.copyBlogs = data;
        });
        this.filter(params.search);
      }
      else if(params.user) {
        console.log("user");
        this.blogService.getBlogsByUser(params.user).subscribe((data) => {
          this.blogs = this.copyBlogs = data;
        }); 
      }
      else if(params.search) {
        console.log("search", params.search);
        this.blogService.getBlogs().subscribe((data) => {
          this.blogs = this.copyBlogs = data;
        });
        console.log(this.blogs);
        this.filter(params.search);
      }
      else {
        this.blogService.getBlogs().subscribe((data) => {
          this.blogs = this.copyBlogs = data;
        });
      }
    });
  }
  
  increment() {
    this.cnt++;
  }
  isEven() {
    return this.cnt % 2 == 0 ? true : false;
  }

  filter(query:string)
  { 
    query = query.toLowerCase().trim();
    let terms:string[] = query.split(' ');
    this.blogs = [];
    
    this.copyBlogs.forEach(b => {
      let ok:boolean = false;
      terms.forEach(term => {
        if (b.title.toLocaleLowerCase().includes(query) || b.author.toLocaleLowerCase().includes(query)) {
            ok = true;
        }
        let dateSplit = b.published.split('-');
        dateSplit.forEach(ele => {
          if(ele.includes(term)) {
            ok = true;
          }
        });
      });
      if(ok) {
        this.blogs.push(b);
      }
    });
  }

  ngOnChanges() {
    console.log("chages");
  }
}
