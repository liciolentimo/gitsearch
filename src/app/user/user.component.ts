// import { Component, OnInit } from '@angular/core';
// import { ProfileService } from '../profile.service';
// import {User} from "../user";
// // import * as $ from "jquery";

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent  {

//   profile:any[];

//   user:User;
//   repos =[];
//   username:string;

//   constructor(private profileService:ProfileService) { 

//     this.profileService.updateProfile(this.username);
//   	this.profileService.getProfileInfo().subscribe(profile => {
//       console.log(profile);
//     });

//   this.profileService.getProfile().subscribe(profile=>{
//     console.log(profile);
//     this.profile = profile;
//   });

// }



//   // ngOnInit() {
//   // }
  
//   // viewRepo:boolean = false;
//   // users:User[] = []

//   // searchUser() {
//   //   let userName = $("#name").val()
//   //   this.user = this.searcher.getUser(userName);
//   //   this.repos = this.searcher.getRepo(userName);
//   //   $("#name").val("")
//   //   this.viewRepo = false;
//   //   console.log(this.repos)
//   // }
//   // searchRepo() {
//   //   let toSearch = $("#repoSearch").val();
//   //   this.repos.forEach(element => {
//   //     element.name.indexOf(toSearch) === -1 ? element.display = false : element.display = true;
//   //   });
//   //   $("#repoSearch").val("")
//   // }
 

// // }



import { Component, OnInit } from '@angular/core';


import { User } from '../user';
import { ProfileService } from '../profile.service';
import * as $ from "jquery";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[ProfileService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'Gitsearch';
 

  user:User;
  // profile:any[];
  repos =[];
  clone = [];
  username:string;
  viewRepo:boolean = false;

  ngOnInit() {
  }

  constructor(private profileService:ProfileService) { }
  users:User[] = []

    searchUser(){

      let userName = $("#name").val()
    this.user = this.profileService.getProfileInfo(userName);
    this.repos = this.profileService.getRepo(userName);
    this.clone = this.repos;
    $("#name").val("")
    this.viewRepo = false;
    console.log(this.repos)
  }

  toggleRepos() {
    this.viewRepo = !this.viewRepo;
  }

  searchRepo() {
    let toSearch = $("#repoSearch").val();
    this.repos.forEach(element => {
      element.name.indexOf(toSearch) === -1 ? element.display = false : element.display = true;
    });
    $("#repoSearch").val("")
    
  }
  viewAll() {
    this.repos.forEach(repo => {
      repo.display = true;
    })

    // this.profileService.updateProfile(this.username);
  	// this.profileService.getProfileInfo().subscribe(profile => {
    //   console.log(profile);
    // });
    // this.profileService.getProfileRepos().subscribe(repos => {
    //   console.log(repos);
    // })
}

  
  
}

