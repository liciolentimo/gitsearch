import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gitsearch';

  user:User;
  profile:any[];
  repos =[];
  username:string;

  constructor(private profileService:ProfileService) { }

    searchUser(){
    // this.profileService.updateProfile(this.username);
  	// this.profileService.getProfileInfo(name).subscribe(profile => {
    //   console.log(profile);
    // });
    // this.profileService.getProfileRepos(name).subscribe(repos => {
    //   console.log(repos);
    // })
  }
  
  ngOnInit() {
  }
}
