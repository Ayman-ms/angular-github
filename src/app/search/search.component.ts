import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoriesService } from '../services/repositories.service';
import { HttpClient } from '@angular/common/http';
import * as alertify from 'alertifyjs'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private router: Router,
              private http:HttpClient,
              private getResList:RepositoriesService) { }

  username:any;
  repositories!:String[]
  repositoriesLength:any
  submit() {
  this.getResList.getResList(this.username).subscribe((res)=>{
  this.repositories=res
  this.repositoriesLength=this.repositories.length
  if(this.repositoriesLength) 
  {alertify.success('Success this user have '+this.repositoriesLength +' repositories');}
    },error =>{
      if (error.code ='404') {
        alertify.error('Pleas try with avalible username');
      }
    }
  )
  }


}
