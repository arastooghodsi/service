import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  log() {
    console.log(this.loggingService.title);
    this.loggingService.log("I'm in HomeComponent");
  }

  public onChange(event: Event) {
    this.loggingService.title = (event.target as HTMLInputElement).value;
  }

}
