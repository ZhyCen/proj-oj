import { Component, OnInit } from '@angular/core';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: any;

  public languages: string[] = ["Java", "C++", "Python"];
  language: string = "Java";

  defaultContent: object = {
'Java': `public class Solution {
  public statuc void main(String[] args) {
    // type your Java code here
  }
}`,
'C++': `#include <iostream>
using namespace std;

int main() {
  // Type your C++ code here
  return 0;
}
`,
'Python' : `class Solution:
  def example():
  # Write your Python code here`
  };

  langMap: object = {
    'Java' : 'java',
    'C++' : 'c_cpp',
    'Python' : 'python'
  }

  constructor() { }

  ngOnInit() {
    this.editor = ace.edit("editor");
<<<<<<< HEAD
    this.editor.setTheme('ace/theme/eclipse');
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;
  }

  setLanguage(language: string) {
    this.language = language;
    this.resetEditor();
  }

  resetEditor(): void {
    this.editor.getSession().setMode('ace/mode/'+this.langMap[this.language]);
    this.editor.setValue(this.defaultContent[this.language]);
  }

  submit(): void {
    let userCode = this.editor.getValue();
    console.log(userCode);
  }

=======
    this.editor.setTheme('ace/theme.eclipse');
    this.editor.getSession().setMode('ace/mode/java');
    this.editor.setValue(this.defaultContent['Java']);
    this.editor.$blockScrolling = Infinity;
  }

>>>>>>> 0b755bda5b4ed5472c82863ffe816a168d69fbe2
}
