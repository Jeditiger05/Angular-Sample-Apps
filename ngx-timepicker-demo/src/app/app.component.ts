import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("picker", { static: true }) picker: ElementRef;
  dateTime: Date;

  title = 'ngx-time-picker';

  onClick(){
    let time = this.picker.nativeElement.value;
    this.dateTime = new Date();
    console.log("Initial date: " + this.dateTime);
    //Set time from value
    this.dateTime.setHours(time.slice(0, 2));
    this.dateTime.setMinutes(time.slice(3, 5));
    this.dateTime.setSeconds(0);
    console.log("New date: " + this.dateTime); 
    console.log("To JSON: " + this.dateTime.toJSON());
  }
}