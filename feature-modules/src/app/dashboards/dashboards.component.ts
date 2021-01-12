import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const dropdown = document.getElementsByClassName('dropdown')[0];

    if (dropdown) {
      fromEvent(dropdown, 'click')
        .pipe(
          map(() => {
            dropdown.classList.toggle('is-active');
          })
        ).subscribe();
    }
  }

  ngOnInit(): void {
  }

}
