import { Component, OnInit } from '@angular/core';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: any;

  defaultContent: object = {
'Java': `public class Solutio {
  public statuc void main(String[] args) {
    // type your code here
  }
}`
  };

  constructor() { }

  ngOnInit() {
    this.editor = ace.edit("editor");
    this.editor.setTheme('ace/theme.eclipse');
    this.editor.getSession().setMode('ace/mode/java');
    this.editor.setValue(this.defaultContent['Java']);
    this.editor.$blockScrolling = Infinity;
  }

}
