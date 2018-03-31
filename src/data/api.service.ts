import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Score } from '../models/score';
import PouchDB from 'pouchdb';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIService {

    data: any;
    db: any;
    remote: string = 'http://127.0.0.1:5984/scores';
    private success: boolean = true;

    constructor() {
 
        this.db = new PouchDB('scores');
 
        let options = {
            live: true,
            retry: true
          };
           
          this.db.sync(this.remote, options);
    }

    postScore(score: any){
        return this.db.post(score)
        .then(function (response) {
            // handle response
          }).catch(function (err) {
            console.log(err);
          });
    }

    getScores(): Observable<Score> {
        return Observable.from(this.db.query('posts/by_date_published'));

    }
}