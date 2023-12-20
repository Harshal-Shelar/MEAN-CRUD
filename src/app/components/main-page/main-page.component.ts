import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  openPopup : any;
  mainPageList : any =[
    {name: 'This is the Complete MEAN Stack CRUD Application. Where we can perform Create, Read, Update and Delete operations.'},
    {name: 'In this project we can insert new user record with image uploading feature.'},
    {name: 'When you are done with creating new user record your page page will redirect to the list page.'},
    {name: 'All the user lists are displayed in the tabular format and for every user details edit and delete operations can be performed.'},
    {name: 'You can edit and delete the user information by clicking the appropriate button next to the record.'},
    {name: 'Also if there is large amount of data, you can perform pagination operation, where you can display 5, 10, 15 and 20 records at a time according to your need.'},
    {name: 'In the tabular formated data you can jump from the one list of page to the another list'},
    {name: 'You can also perform search functionality on the table and any column name'},
    {name: 'We can created one page where you can check how many students have selected which instrument with total numbers.'},
    {name: 'When you are about to the list of student of perticular instrument, you can get the list of students in the tabular format'},
    {name: 'The delete functionality is also added in the popup of student list.'},
    {name: 'In the popup table you can also perform edit functionality when clicking on the edit page'},
    {name: 'And you can also perform update operatio when clicking on the update button in update page.'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
