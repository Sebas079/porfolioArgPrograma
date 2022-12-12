import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobProfileService } from 'src/app/services/job-profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private jobProfile: JobProfileService) { }
  myProfile:any;
  ngOnInit(): void {
      this.jobProfile.getData().subscribe(data =>{
console.log(data);
this.myProfile = data; 
    })

  }

}
