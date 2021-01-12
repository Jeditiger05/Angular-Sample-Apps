import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { DataService } from './data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-side-nav';


  constructor (private _location: Location, private dataService: DataService,
    private spinner: NgxSpinnerService){
    this.dataService.loading.subscribe((value) => {
      if (value) {
        this.spinner.show(undefined,
          {
            type: 'pacman',
            size: 'medium',
            bdColor: 'rgba(128, 128, 128, .8)',
            color: 'yellow',
            fullScreen: true
          });
      } else {
        this.spinner.hide();
      }
    });
  }

  back(){
    this._location.back();
  }

}
