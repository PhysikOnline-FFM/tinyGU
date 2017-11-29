import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Link, LinkAPImodel } from '../models/link';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

const apiURLs = {
  getURL: environment.apiURL + '/api/v1/links',
  getOneURL: environment.apiURL + '/api/v1/links/',
  createURL: environment.apiURL + '/api/v1/links',
  updateURL: environment.apiURL + '/api/v1/links/',
  deleteURL: environment.apiURL + '/api/v1/links/',
};

@Injectable()
export class ApiService {

  constructor( private http: HttpClient ) { }

  getAllLinks (): Observable <Link[]> {
    // return this.http.get(apiURLs.getURL).map( (oneLink: LinkAPImodel) => Link.fromAPItype(oneLink));
    return this.http.get(apiURLs.getURL).map( Link.fromAPItype );
  }

  getOneLink (id: number): Observable <Link> {
    return this.http.get(apiURLs.getOneURL + id).map(Link.fromAPItype);
  }

  createLink (link: Link): Observable <Link> {
    const apiTypeLink = link.toAPItype();
    return this.http.post(apiURLs.createURL, apiTypeLink).map( Link.fromAPItype );
  }

  updateLink (link: Link, id: number): Observable <Link> {
    const apiTypeLink = link.toAPItype(); // TODO what performs better -> link.toAPItype() or const ?
    return this.http.put(apiURLs.updateURL + id, link.toAPItype()).map(Link.fromAPItype);
  }

  // TODO if i dont get any return type shouldnt that be void? but void has no subscribe property
  // throws error: HttpErrorResponse {headers: HttpHeaders, status: 400, statusText: "Bad Request",
  // url: "http://localhost:5000/api/v1/links/24", ok: false, …}
  deleteLink (id: number) {
    return this.http.delete(apiURLs.deleteURL + id);
  }

}
