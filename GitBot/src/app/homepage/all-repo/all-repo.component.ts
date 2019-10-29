import { Component, OnInit, Input } from '@angular/core';
import { GitApiService } from 'src/app/git-api.service';
import { RepoItem } from './repoItem.object';
import { FavoriteService } from 'src/app/favorite.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-all-repo',
  templateUrl: './all-repo.component.html',
  styleUrls: ['./all-repo.component.css']
})
export class AllRepoComponent implements OnInit {

  @Input() action;
  Entity;

  constructor(private gitService: GitApiService, private favoriteService: FavoriteService) { }
  private allrepo: RepoItem[] = [];
  showHTTP: boolean = true;
  showSSH: boolean = false;
  onClick() {
    this.showHTTP = !this.showHTTP;
    this.showSSH = !this.showSSH;
  }




  ngOnInit() {
    if (this.action === 'retrieve_all_repo') {
      this.Entity = this.gitService.getAllRepos();
    } else {
      this.Entity = this.favoriteService.getAllFavorites();
    }
    this.Entity.subscribe((data: any) => {
      data.forEach(element => {
        this.allrepo.push(new RepoItem(element.id, element.name, element.private, element.clone_url, element.ssh_url,
          element.stargazers_count, element.created_at, element.description));
      });
    });
    console.log(this.allrepo);
  }
  addToFavorites(toSave: RepoItem) {
    this.favoriteService.addToFavorites(toSave).subscribe((data: any) => {
      console.log(data);
    });
  }



}
