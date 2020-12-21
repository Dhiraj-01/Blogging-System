import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
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
    //   }
    //   );
    // }

    this.route.queryParams.subscribe((params) => {
      if(params.user) {
        this.blogService.getBlogsByUser(params.user).subscribe((data) => {
          this.blogs = this.copyBlogs = data;
        }); 
      }
      else {
        this.blogService.getBlogs().subscribe((data) => {
          this.blogs = this.copyBlogs = data;
          }
        );
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
    this.blogs = this.copyBlogs;
    let filterBlogs:IBlog[] = [];
    
    this.blogs.forEach(b => {
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
        filterBlogs.push(b);
      }
    });
    this.blogs = filterBlogs;
  }

  relevantBlogs(query: string) {
    query = query.toLowerCase().trim();
    let releventBlogs = this.blogs.filter(blog => {
      if(blog.title.toLocaleLowerCase().includes(query) || blog.author.toLocaleLowerCase().includes(query) || 
        blog.published.toLocaleLowerCase().includes(query)) {
        return true;
      }
      else {
        return false;
      }
    });
    return releventBlogs;
  }
}
