import { Component, OnInit } from '@angular/core';
import { JobProfileService } from 'src/app/services/job-profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
   educationList:any;
  constructor(private jobProfile: JobProfileService) { }

  ngOnInit(): void {
    this.jobProfile.getData().subscribe(data =>{
      this.educationList = data.education;
    }
      )
  }

}
