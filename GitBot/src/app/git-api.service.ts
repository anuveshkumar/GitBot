import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewRepository } from './homepage/create-repo/newrepo.object';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {

  user = 'githubapitesting';
  token = 'c6bca9c8e7a684fd75f3f7d77a0d1d89d65c1103';
  base_url = 'https://api.github.com/';
  extention = '';

  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Token 98f5c7fc537b1fd9b8e788f15df7b4e010df1c8b',
    }),
    observe: 'response' as 'body'
  };


  getAllRepos() {
    this.extention = 'user/repos'
    return this.httpclient.get(this.base_url + this.extention, this.httpOptions);
  }

  createRepo(repo: NewRepository) {
    this.extention = 'user/repos';
    return this.httpclient.post(this.base_url + this.extention, repo, this.httpOptions);
  }


  deleteRepo() {

  }
}
