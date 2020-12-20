import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../models/blog';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  blogs = [];

  cnt:number = 0;
  ngOnInit(): void {
    console.log("inside");
    this.cnt = 0;
    this.route.queryParams.subscribe((params) => {
      if(params.user) {
        console.log(params.user);
      }
    });
  }
  
  increment() {
    this.cnt++;
  }
  isEven() {
    return this.cnt % 2 == 0 ? true : false;
  }
}
