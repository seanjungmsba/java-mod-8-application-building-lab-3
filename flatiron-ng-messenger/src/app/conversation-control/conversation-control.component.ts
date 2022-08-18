import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation-control-component',
  templateUrl: './conversation-control.component.html',
  styleUrls: ['./conversation-control.component.css']
})
export class ConversationControlComponent implements OnInit {

  conversations = [
    {
      id: 1,
      users: [
        { firstName: "Claire" },
        { firstName: "Ludovic" },
        { firstName: "Jessica" },
      ],
    },
    {
      id: 2,
      users: [{ firstName: "Claire" }, { firstName: "James" }],
    },
    {
      id: 3,
      users: [
        { firstName: "Claire" },
        { firstName: "Aurelie" },
        { firstName: "James" },
        { firstName: "Jessica" },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
