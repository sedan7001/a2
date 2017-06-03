import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {PersonData} from './data/person-data';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PersonListComponent} from './person/person-list.component';
import {ItemEditComponent} from './person/item-edit.component';
import {SecondListComponent} from './second-list/second-list.component';

const appRoutes: Routes = [
  { path: 'person-list', component: PersonListComponent },
  { path: 'second-list', component: SecondListComponent },
  { path: '',   redirectTo: '/second-list', pathMatch: 'full' },
  { path: '**', component: PersonListComponent }
];


@NgModule({
  declarations: [
    AppComponent
    , PersonListComponent
    , ItemEditComponent, SecondListComponent
  ]
  , imports: [
    BrowserModule
    , FormsModule
    , HttpModule
    , CommonModule
    , InMemoryWebApiModule.forRoot(PersonData)
    , RouterModule.forRoot(appRoutes)

  ]
  , providers: []
  , bootstrap: [AppComponent]
})
export class AppModule {
}
