import { Component, OnInit } from '@angular/core';
import {CountryService} from "./country.service";
import {SecondComponent} from "./second.component";

@Component ({
  selector: 'my-first',
  templateUrl: 'app/first.component.html',
  styleUrls: ['app/first.css'],
  providers: [CountryService]
})

export class FirstComponent implements OnInit {
    name:string;
    countries:any;

	constructor(private _countryService: CountryService) {
		this.name='Anand';
	}
	getContacts(){
   		this._countryService.getContacts().then((countries: any[]) => this.countries = countries);

   	}

	ngOnInit():any {
   		this.getContacts();
	}
	
}
