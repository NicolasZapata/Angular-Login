import { baseUrl } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    console.log('I am a server :)')
    // return this.http.post(`${baseUrl}users/data`, data)
    return this.http.post(`${baseUrl}users/`, data)
  }
}
