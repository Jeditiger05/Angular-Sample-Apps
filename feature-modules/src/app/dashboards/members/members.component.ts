import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  memberDetails:  {
    name: "Jason",
    lastName: "Savage",
    dob: "05/01/1974",
    mobile: "0409 331 005",
    email: "jason.savage@getfucked.gov.au"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
