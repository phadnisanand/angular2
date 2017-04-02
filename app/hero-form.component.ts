import { Component } from '@angular/core';
import {HeroService} from "./hero.service";
import { Hero }    from './hero';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html',
  viewProviders : [HeroService]
})

export class HeroFormComponent {
  data;

  getAllData()
  {
	
        this.http.get('http://localhost:3000/app/people.json')
                .subscribe(res => this.data = res.json());

  }

  createData()
  {
	
  }

 deleteData()
 {

 }

 updateData()
 {

 }
 constructor(private http:Http) {

    this.getAllData();
  }


}
