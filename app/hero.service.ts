import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  constructor(private http:Http) {}

  getAllData() {

      return this.http.get('http://localhost:8888/drupal-8.2.7/articles').map(
         res => res.json(),
       );
       

  }

}



