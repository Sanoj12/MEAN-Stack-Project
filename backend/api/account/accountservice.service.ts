import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Accountinfo} from './accountinfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  url='http://localhost:3000/'


  constructor(private http:HttpClient) { }
     createaccount(accouinfo:Accountinfo):Observable<Accountinfo>{

        return this.http.post<Accountinfo>(this.url='api/register',accouinfo)
     }
}
