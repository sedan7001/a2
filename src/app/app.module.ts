import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {PersonData} from './data/person-data';


import {AppComponent} from './app.component';
import {PersonListComponent} from './person/person-list.component';
import {ItemEditComponent} from './person/item-edit.component';

@NgModule({
  declarations: [
    AppComponent
    , PersonListComponent
    , ItemEditComponent
  ]
  , imports: [
    BrowserModule
    , FormsModule
    , HttpModule
    , CommonModule
    , InMemoryWebApiModule.forRoot(PersonData)

  ]
  , providers: []
  , bootstrap: [AppComponent]
})
export class AppModule {
}
