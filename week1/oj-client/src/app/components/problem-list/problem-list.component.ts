import { Component, OnInit } from '@angular/core';
import { Problem } from "../../models/problem.model";

// const PROBLEMS: Problem[] = [{}];

@Component({
  selector: 'app-problem-list',
  template: `
    <p>
      problem-list works!
    </p>
    
    <div class = "container">
      <div class = "list-group">
        <a class = "list-group-item">
          
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class ProblemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
