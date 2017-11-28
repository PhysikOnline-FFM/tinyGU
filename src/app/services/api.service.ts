import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Link, LinkAPImodel } from '../models/link';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  // TODO dict for apiurl...

  constructor( private http: HttpClient ) { }

  getAllLinks (): Observable <Link[]> {
    // return this.http.get(environment.apiURL + '/api/v1/links').map( (oneLink: LinkAPImodel) => Link.fromAPItype(oneLink));
    return this.http.get(environment.apiURL + '/api/v1/links').map( Link.fromAPItype );
  }

  createLink (link: Link): Observable <Link> {
    const apiTypeLink = link.toAPItype();
    return this.http.post(environment.apiURL + '/api/v1/links', apiTypeLink).map( Link.fromAPItype );
  }

}
