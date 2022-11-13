import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/IProperty.interface';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties!: Array<IProperty>;
  SellRent = 1;

  constructor(
      private housingService:HousingService,
      private route: ActivatedRoute ) {

  }

  ngOnInit(): void {

    //console.log(this.route.snapshot.url.toString());

    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }


    this.housingService.getAllProperties(this.SellRent).subscribe(
      data =>{
        this.properties=data;
      },
      error =>{
        console.log(error);
      },
      ()=>{
        console.log("complete");
      }

    );

  }
}
