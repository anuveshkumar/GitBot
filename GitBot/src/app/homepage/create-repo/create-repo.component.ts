import { Component, OnInit } from '@angular/core';
import { NewRepository } from './newrepo.object';
import { GitApiService } from 'src/app/git-api.service';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {

  model: NewRepository = new NewRepository();

  constructor(private gitService: GitApiService) { }

  onSubmit(values: NewRepository) {
    console.log(this.model);
    this.gitService.createRepo(this.model).subscribe((data: any) => {
      console.log(data.headers);
      console.log(data);
      console.log("done dana done");
    }
    );

  }

  ngOnInit() {
  }

}
