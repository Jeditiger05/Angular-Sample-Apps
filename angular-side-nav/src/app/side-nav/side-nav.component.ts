import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private _location: Location, private dataService: DataService) { }

  ngOnInit(): void {
  }

  back(){
    this._location.back();
  }

  startSpinner() {
    this.dataService.loading.next(true);

    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.dataService.loading.next(false);
    }, 3000);
  }

}
