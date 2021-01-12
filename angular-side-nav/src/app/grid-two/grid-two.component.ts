import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-grid-two',
  templateUrl: './grid-two.component.html',
  styleUrls: ['./grid-two.component.css']
})
export class GridTwoComponent implements OnInit {

  titles = ["Mr", "Mrs", "Miss", "None"];

  constructor() { }

  ngOnInit(): void {
  }

  submitPatient(form){
    console.log(form.value);
    form.reset();
  }

}
