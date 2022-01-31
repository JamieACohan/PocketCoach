import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class DataProvider {

  headers = new Headers({'X-Mashape-Key': 'd6ffa8a33b0923db92001cc3adb44961'})
  options = new RequestOptions({ headers: this.headers});
  limit:number = 50;

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getFoods(kw)
  {
    let keyword = kw;

    // let data:Observable<any>;

    return this.http.get('https://api.nutritionix.com/v1_1/search/'+keyword+'?results=0%3A50&fields=*&appId=82f16779&appKey=d6ffa8a33b0923db92001cc3adb44961')
      .map(response => response.json());
      
  }

  getFoodById(food){
    let item_id = food;

    return this.http.get('https://api.nutritionix.com/v1_1/item?id='+item_id+'&appId=82f16779&appKey=d6ffa8a33b0923db92001cc3adb44961')
    .map(res => {
      return res.json();
    });


  }

 



}
