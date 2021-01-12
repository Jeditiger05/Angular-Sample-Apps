import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loading: BehaviorSubject<boolean>;

  constructor(private spinner: NgxSpinnerService) {
    this.loading = new BehaviorSubject(false);
  }
}