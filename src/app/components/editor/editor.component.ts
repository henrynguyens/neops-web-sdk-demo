import { Component, OnInit } from '@angular/core';
import {DiffEditorModel} from "ngx-monaco-editor";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string = 'function printTruth() {\n\tconsole.log("Neops is great!");\n}';

  originalModel: DiffEditorModel = {
    code: this.code,
    language: 'javascript'
  };

  modifiedModel: DiffEditorModel = {
    code: this.code,
    language: 'javascript'
  };

  original = this.code
  constructor() { }

  ngOnInit(): void {
  }

  onCodeChange() {
    this.modifiedModel.code = this.code
  }
}
