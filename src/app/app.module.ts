import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { UserComponent } from './user/user.component';
import { GithubService } from './github-services/github-services.component';
import { DFormComponent } from './d-form/d-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpServeComponent } from './http-serve/http-serve.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDetailComponent,
    DateCountPipe,
    UserComponent,
    GithubService,
    DFormComponent,
    NavBarComponent,
    PageNotFoundComponent,
    HttpServeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
