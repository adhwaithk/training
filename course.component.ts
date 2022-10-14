import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
   course=[

    {'id':1,'name':'Learn Angular','description':'Angular is a platform and framework for building SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA.','image':'../../assets/angular.jpeg'},
    {'id':2,'name':'Learn Typescript','description':'Typescript is a free and open source programming language language  language','image':'../../assets/typescript.jfif'},
    {'id':3,'name':'Learn Nodejs','description':'Node.js is an open source  platform for executing javascript code server-side server-side server-side  server-side','image':'../../assets/nodejs.png'},
    {'id':4,'name':'Learn React','description':'React is a declarative,efficient javascript library for building user interfaces interfaces interfaces interfaces ','image':'../../assets/react.jfif'},
  ]


}
