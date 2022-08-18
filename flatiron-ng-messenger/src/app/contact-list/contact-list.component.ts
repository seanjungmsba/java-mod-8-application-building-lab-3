import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  users = [
    { firstName: "Aurelie" },
    { firstName: "James" },
    { firstName: "Jessica" },
    { firstName: "Ludovic" },
    { firstName: "Maria" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
