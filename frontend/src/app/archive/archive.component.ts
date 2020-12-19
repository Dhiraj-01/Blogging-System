import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor() { }
  blogs = [
    {
      "_id": "5fd9d3e62b7aa334c42780fe",
      "published": "Wed Dec 16 2020 15:01:13 GMT+0530 (India Standard Time)",
      "title": "Hello world !",
      "author": "dhiraj",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9db9ffa3751275c5fda9a",
      "published": "Wed Dec 16 2020 00:00:00 GMT+0530 (India Standard Time)",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dbeab51a5305789a033c",
      "published": "16-Dec-2020",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dc0dd886eb3738e5b9a7",
      "published": "16-Dec-2020",
      "title": "Hello world 3 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dc201167912dbc2c2a76",
      "published": "16-Dec-2020",
      "title": "Hello world 3 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dc2c1167912dbc2c2a77",
      "published": "16-Dec-2020",
      "title": "Hello world 3 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dc5a1167912dbc2c2a78",
      "published": "16-Dec-2020",
      "title": "Hello world 3 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dc6eb3a06039d04de672",
      "published": "Wed Dec 16 2020 15:37:37 GMT+0530 (India Standard Time)",
      "title": "Hello world 3 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dc7ab3a06039d04de673",
      "published": "Wed Dec 16 2020 15:37:37 GMT+0530 (India Standard Time)",
      "title": "Hello world 3 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dc7cb3a06039d04de674",
      "published": "Wed Dec 16 2020 15:37:37 GMT+0530 (India Standard Time)",
      "title": "Hello world 3 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dc7eb3a06039d04de675",
      "published": "Wed Dec 16 2020 15:37:37 GMT+0530 (India Standard Time)",
      "title": "Hello world 3 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dc7fb3a06039d04de676",
      "published": "Wed Dec 16 2020 15:37:37 GMT+0530 (India Standard Time)",
      "title": "Hello world 3 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "__v": 0
    },
    {
      "_id": "5fd9dd0b691c7f47947be221",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "published": "16-Dec-2020",
      "__v": 0
    },
    {
      "_id": "5fd9dd1d691c7f47947be222",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "published": "16-Dec-2020",
      "__v": 0
    },
    {
      "_id": "5fd9dd3019fdad36f8ee67e6",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "published": "16-Dec-2020",
      "__v": 0
    },
    {
      "_id": "5fd9dd3819fdad36f8ee67e7",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "published": "16-Dec-2020",
      "__v": 0
    },
    {
      "_id": "5fd9dd4119fdad36f8ee67e8",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "published": "16-Dec-2020",
      "__v": 0
    },
    {
      "_id": "5fd9dd53e83aab4054f6178c",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "published": "16-Dec-2020",
      "__v": 0
    },
    {
      "_id": "5fd9dd56e83aab4054f6178d",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "published": "16-Dec-2020",
      "__v": 0
    },
    {
      "_id": "5fd9dd57e83aab4054f6178e",
      "title": "Hello world 2 !",
      "author": "deep",
      "content": "this is demo.",
      "description": "hello world programm in c++.",
      "published": "16-Dec-2020",
      "__v": 0
    }
  ];
  ngOnInit(): void {
  }

}
