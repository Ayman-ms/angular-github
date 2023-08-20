import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(
    private httpClient:HttpClient
  ) { }

// get all Repositories for by username
getResList(username:string):Observable<any>{
  //username from user
  const url='https://api.github.com/users/'+username+'/repos'
  return this.httpClient.get<any>(url)
}

}
