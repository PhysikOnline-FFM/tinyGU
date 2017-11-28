import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Link, LinkAPImodel } from '../models/link';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor( private http: HttpClient ) { }

  getAllLinks (): Observable <Link[]> {
    return this.http.get(environment.apiURL + '/api/v1/links').map( (oneLink: LinkAPImodel) => Link.fromAPItype(oneLink));
  }

}
