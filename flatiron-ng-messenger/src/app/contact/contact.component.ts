import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() user = {
    firstName: "default",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
