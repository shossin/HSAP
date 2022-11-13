import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyID!: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
      //this.propertyID=0;
    }

  ngOnInit() {
   // this.propertyID = +this.route.snapshot.params["id"];
    this.route.params.subscribe(
      data=>{
        this.propertyID = +data["id"];
      }
    )
  }

  onNextPage(){
    this.propertyID +=1;
    this.router.navigate(['property-detail', this.propertyID]);
  }

  onPrevPage(){
    this.propertyID -=1;
    this.router.navigate(['property-detail', this.propertyID]);
  }


}
