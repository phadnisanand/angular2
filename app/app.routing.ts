import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';
import { HeroFormComponent } from './hero-form.component';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'first'},
{path: 'first', component: FirstComponent},
{path: 'second', component: SecondComponent},
{path: 'third', component: ThirdComponent},
{path: 'form', component: HeroFormComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [FirstComponent, SecondComponent, ThirdComponent,HeroFormComponent];