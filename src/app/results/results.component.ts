import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GithubService} from '../github.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  data;
  repos;
  username;
  pageOfItems: Array<any>;
  constructor(private ActivatedRoute: ActivatedRoute,private GithubService:GithubService) {
    this.username = this.ActivatedRoute.snapshot.params.username;
    this.GithubService.getUserDetails(this.username).subscribe((data)=> {
      this.data = data;
      console.log(this.data);
    })
    this.GithubService.getUserRepos(this.username).subscribe((repos)=> {
      this.repos = repos;
      console.log(this.repos);
    })
  }
  ngOnInit(): void {
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
