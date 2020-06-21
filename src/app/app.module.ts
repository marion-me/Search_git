import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { UserComponent } from './user/user.component';
import { DFormComponent } from './d-form/d-form.component';
import { navBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RepoComponent } from './repo/repo.component';
import { GithubService } from './Gitub-service/github.service';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    UserComponent,
    DFormComponent,
    navBarComponent,
    PageNotFoundComponent,
    RepoComponent,
    GithubService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
