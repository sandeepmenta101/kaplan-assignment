import { Component, OnInit } from '@angular/core';

import { HttpService } from './../../service/http.service';
import { Tutorial } from './../../interfaces/tutorial.interface';
@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  public tutorialsList: Tutorial[] = [];
  public loadingShimmers: Number[] = new Array(8).fill(0); 

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getTutorials().subscribe((data: Tutorial[]) => {
      setTimeout(() => {
        this.tutorialsList = data || [];
      }, 5000)
    })
  }

}
