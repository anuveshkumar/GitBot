import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { GitApiService } from './git-api.service';
import { IntentService } from './intent.service';
import { AllRepoComponent } from './homepage/all-repo/all-repo.component';
import { CreateRepoComponent } from './homepage/create-repo/create-repo.component';
import { FindRepoComponent } from './homepage/find-repo/find-repo.component';
import { FavoriteService } from './favorite.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AllRepoComponent,
    CreateRepoComponent,
    FindRepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GitApiService, IntentService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
