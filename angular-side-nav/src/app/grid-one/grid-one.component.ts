import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grid-one',
  templateUrl: './grid-one.component.html',
  styleUrls: ['./grid-one.component.css']
})
export class GridOneComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  startSpinner() {
    this.dataService.loading.next(true);

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.dataService.loading.next(false);
    }, 5000);
  }

}
