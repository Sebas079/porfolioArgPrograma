import { Component, OnInit } from '@angular/core';
import { JobProfileService } from 'src/app/services/job-profile.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
skillsList: any;
  constructor(private jobProfile: JobProfileService ) { }

  ngOnInit(): void {
    this.jobProfile.getData().subscribe(data =>{
      this.skillsList = data.skills;
      console.log(this.skillsList)
    })
  }

}
