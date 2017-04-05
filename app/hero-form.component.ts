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

  getAllArticlesData()
  {

         this.http.get('http://localhost:8888/drupal-8.2.7/articles')
                .subscribe(res => this.data = res.json()); 
          /*this.http.get('http://localhost:3000/app/people.json')
                .subscribe(res => this.data = res.json()); */
  }

  getSingleUser()
  {
                       
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
         this.http.get('http://localhost:8888/drupal-8.2.7/user/1?_format=json', {
          headers: headers
        })
        .subscribe(res => this.data =  [res.json()]);


  }

  getSingleNode()
  {

        let headers = new Headers();
         this.http.get('http://localhost:8888/drupal-8.2.7/node/7?_format=json', {
          headers: headers
        })
        .subscribe(res => this.data =  [res.json()]);


  }
  createData()
  {
         let headers = new Headers();
         headers.append('Content-Type', "application/json; charset=utf8"); 
         this.createAuthorizationHeader(headers);
         let body;
           body={
            "type":[{"target_id":"article"}],
            "title":[{"value":"Hello Anand"}],
            "body":[{"value":"How are you?"}]
          };
          this.http.post (
          'http://localhost:8888/drupal-8.2.7/entity/node/', JSON.stringify(body), {
            headers: headers
          }).subscribe(); 

  }
  
  updateData()
  {

         let headers = new Headers();
         headers.append('Content-Type', "application/json; charset=utf8"); 
         this.createAuthorizationHeader(headers);
         let body;
           body={
            "title":[{"value":"Hello Anand"}]
          };
          this.http.patch(
          'http://localhost:8888/drupal-8.2.7/entity/node/10', JSON.stringify(body), {
            headers: headers
          }).subscribe(); 


  }

 deleteData(id: number)
 {
     
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
   return this.http.delete('http://localhost:8888/drupal-8.2.7/node'+ id, {
        headers: headers,
   }).subscribe(); 
	
 }

 editData(id: number)
 {

	   this.http.get('http://localhost:8888/drupal-8.2.7/articles'+ id)
                .subscribe(res => this.data = res.json()); 

 }

 createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('admin:admin')); 
  }
  


 constructor(private http:Http) {

     this.getAllArticlesData();

     //this.getSingleUser();

    // this.getSingleNode();

     //this.createData();
  }


}
