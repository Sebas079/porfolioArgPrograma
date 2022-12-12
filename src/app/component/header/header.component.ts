import { Component, OnInit } from '@angular/core';
import { JobProfileService } from 'src/app/services/job-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
myProfile: any;
  constructor(private jobProfile : JobProfileService) { }

  ngOnInit(): void {
    this.jobProfile.getData().subscribe(data =>{

     this.myProfile = data;
    })

  }

}
