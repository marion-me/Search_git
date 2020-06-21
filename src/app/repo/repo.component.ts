import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { GithubService } from '../Gitub-service/github.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  searchUser = true;
  repositorys:Repo;
  searchName: string;
 
  constructor(public repoService: GithubService, private githubService: GithubService) { }

  repoSearch(searchName){
    this.repoService.getRepos(searchName).then(
      (results) =>{
        this.repositorys = this.repoService.repo
        console.log(this.repositorys)

      },
      (error)=>{
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.repoSearch('s');
  }
}