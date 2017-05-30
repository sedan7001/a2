import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Person } from './person';
import { Observable } from 'rxjs/Observable';
import { handleError } from '../async-handling.observable';

@Injectable()
export class PersonService {

  private personesUrl = 'app/member';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  getPersones(): Observable<Person[]> {
    return this.http.get(this.personesUrl)
      .map(this.extractData)
      .catch(handleError);
  }

  addPerson(name: string): Observable<Person> {
    let options = new RequestOptions({ headers: this.headers });
    var body = { name };

    return this.http.post(this.personesUrl, body, options)
      .map(this.extractData)
      .catch(handleError);
  }

  putPerson(p: Person) {
    let url = `${this.personesUrl}/${p.id}`;
    return this.http
      .put(url, JSON.stringify(p), { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(handleError);
  }

  delPerson(p: Person) {
    let options = new RequestOptions({ headers: this.headers });
    let url = `${this.personesUrl}/${p.id}`;
    return this.http.delete(url, options)
      .map((res: Response) => res.json())
      .catch(handleError);
  }



}
