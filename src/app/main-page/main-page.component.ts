import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  openPopup : any;
  mainPageList : any =[
    {name: 'Add New User', router : '/add'},
    {name: 'Show Full List', router : '/list'},
    {name: 'Total Numbers', router : '/totalNumber'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
