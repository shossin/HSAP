import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [
    {
      id: 1,
      Name: 'New windsor house',
      Type: 'House',
      Price: 1000,
    },
    {
      id: 2,
      Name: 'New windsor house',
      Type: 'House',
      Price: 2000,
    },
    {
      id: 3,
      Name: 'New windsor house',
      Type: 'House',
      Price: 3000,
    },
    {
      id: 4,
      Name: 'New windsor house',
      Type: 'House',
      Price: 4000,
    },
    {
      id: 5,
      Name: 'New windsor house',
      Type: 'House',
      Price: 5000,
    },
    {
      id: 6,
      Name: 'New windsor house',
      Type: 'House',
      Price: 6000,
    },
    {
      id: 7,
      Name: 'New windsor house',
      Type: 'House',
      Price: 7000,
    },
    {
      id: 8,
      Name: 'New windsor house',
      Type: 'House',
      Price: 8000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
