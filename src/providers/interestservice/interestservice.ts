
import { Injectable } from '@angular/core';
import {UserInterests} from "../../models/interests";

/*
  Generated class for the InterestserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InterestserviceProvider {

  private interests:[] = [
      'Architecture', 'Culture','Art', 'Streets', 'Music', 'Pubs'

      // {interest: 'Architecture'},
      // {interest: 'Culture'},
      // {interest: 'Art'},
      // {interest: 'Streets'},
      // {interest: 'Music'},
      // {interest: 'Pubs'}

  ];

  private userInterest: [] = [];

  constructor() {
    console.log('Hello InterestserviceProvider Provider');
  }

  getInterest(){
    return this.interests;
  }

  getUserInterests(){
      return this.userInterest;
  }

  addToUserInterest(item: UserInterests){
      if(this.userInterest.indexOf(item) != -1){
          return;
      }
      this.userInterest.push(item);
  }

  removeFromUserInterest(item){
      this.userInterest.splice(this.userInterest.indexOf(item), 1)
  }

}
