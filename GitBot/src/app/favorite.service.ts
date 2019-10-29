import { Injectable } from '@angular/core';
import { RepoItem } from './homepage/all-repo/repoItem.object';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private httpclient: HttpClient) { }

  addToFavorites(toSave: RepoItem) {
    return this.httpclient.post('http://localhost:8080/addToFavorites', toSave);
  }

  getAllFavorites() {
    return this.httpclient.get('http://localhost:8080/getAllFavorites');
  }
}
