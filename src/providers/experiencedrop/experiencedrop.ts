import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { ExperienceDrop } from "../../models/experienceDrop";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ExperiencedropProvider {

  // private allExperienceDrops: Observable<any[]>;
  //items$: any[];

  constructor( private db: AngularFireDatabase) {
    console.log('Hello ExperiencedropProvider Provider');
      //this.items$ = db.list('/experiencedrops');

  }

  // getAllExperiences(){
  //   console.log('this was called but probably to soon');
  //
  //   this.items$ = this.db.list('experiencedrops/', { preserveSnapshot: true }).take(1);
  //     console.log(this.items$);
  //     return this.items$;
  //
  // }

}
