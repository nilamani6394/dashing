import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nameeditor',
  templateUrl: './nameeditor.component.html',
  styleUrls: ['./nameeditor.component.css']
})
export class NameeditorComponent implements OnInit {
  name = new FormControl("");

  constructor() { }

  ngOnInit(): void {
  }
  updateName() {
    this.name.setValue('Nancy');
  }

}
