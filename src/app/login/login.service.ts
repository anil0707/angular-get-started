import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService{

	private _url = 'http://localhost:8000/login';

	constructor(private _http: HttpClient) { }

	login(data : Object) {

		var result:Object;

		return this._http.post<Object>(this._url, data, httpOptions);
	}
}