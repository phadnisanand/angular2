import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents} from './app.routing';
import { ReverseStr } from './reverse-str.pipe';
import { HeroFormComponent } from './hero-form.component';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,FormsModule, HttpModule, JsonpModule],
  declarations: [ AppComponent, routingComponents ,ReverseStr,HeroFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
