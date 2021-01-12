import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const closeBtn = document.getElementsByClassName('close-btn')[0];
    const modelEl = document.getElementsByClassName('modal')[0];

    if (closeBtn) {
      fromEvent(closeBtn, 'click')
        .pipe(
          map(() => {
            modelEl.classList.toggle('is-active');
          })
        ).subscribe();
    }
  }

  ngOnInit(): void {
  }

  modelOn(){
    const myModel = document.getElementById('model');

    myModel.classList.toggle('is-active');
  }

}
