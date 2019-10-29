import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewRepository } from './newrepo.object';
import { GitApiService } from 'src/app/git-api.service';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {

  model: NewRepository = new NewRepository();
  created: boolean;
  ssh_url: string;
  https_url: string;
  @Output() eventClosed = new EventEmitter();
  constructor(private gitService: GitApiService) { }

  onSubmit(values: NewRepository) {
    console.log(this.model);
    this.gitService.createRepo(this.model).subscribe((data: any) => {
      if (data.status === 201) {
        this.https_url = data.body.clone_url;
        this.ssh_url = data.body.ssh_url;
        this.created = true;
      }
    }, err => {
      console.log(err),
        alert('Failed to create respository\n' + err.error.errors[0].message);
    }
    );

  }

  modalClick() {
    this.eventClosed.emit('homepage');
  }
  ngOnInit() {
  }

}
