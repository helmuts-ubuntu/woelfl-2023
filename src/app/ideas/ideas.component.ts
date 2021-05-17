import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  ideaID = 1;
  ideaName = '';
  ideaStatus: string = 'in progress';
  allowNewIdea:boolean = false;
  ideaSubmissionStatus: string = ''

  constructor() {
    setTimeout(() => {
      this.allowNewIdea = true;
      this.ideaSubmissionStatus = 'We are eagerly awaiting your idea!';
    }, 2000);
  }

  onIdeaSubmitted() {
    this.ideaSubmissionStatus = 'Your Idea was submitted! Thank you for "' + this.ideaName + '"';
  }
  onUpdateIdea(event: Event) {
    this.ideaName = event.target.value;
  }

  ngOnInit(): void {
  }

}
