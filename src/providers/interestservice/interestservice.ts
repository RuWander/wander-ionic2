
import { Injectable } from '@angular/core';
import {UserInterests} from "../../models/interests";

/*
  Generated class for the InterestserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InterestserviceProvider {

  private interest: UserInterests[] = [
      {interest: 'Architecture'},
      {interest: 'Culture'},
      {interest: 'Art'},
      {interest: 'Streets'},
      {interest: 'Music'},
      {interest: 'Pubs'}

  ];

  constructor() {
    console.log('Hello InterestserviceProvider Provider');
  }

  getInterest(){
    return this.interest;
  }

}
