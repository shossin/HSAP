import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../IProperty.interface';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

getAllProperties(): Observable<IProperty[]>{
  return this.http.get("data/properties.json")
  .pipe(
    map(data=>{
      const propertiesArray: Array<IProperty>=[]; //array initialize
      const sdata = JSON.parse(JSON.stringify(data));
      for (const id in sdata) {
        if (sdata.hasOwnProperty(id)) {
          const element = sdata[id];
          propertiesArray.push(element);
        }
      }
      return propertiesArray;
    }
    )
  );
}

}
