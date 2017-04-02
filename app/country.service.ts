import {Injectable} from "@angular/core";
import {COUNTRIES} from "./country.contacts";
@Injectable()

//CountryService exposes the getContacts() method that returns the data
export class CountryService {
   getContacts() {
     	return Promise.resolve(COUNTRIES);

   }
}