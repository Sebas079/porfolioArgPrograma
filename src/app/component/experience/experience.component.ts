import { Component, OnInit } from '@angular/core';
import { JobProfileService } from 'src/app/services/job-profile.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expList:any;
  constructor(private jobProfile :JobProfileService ) { }

  ngOnInit(): void {
        this.jobProfile.getData().subscribe(data =>{
        this.expList = data.experience;
        console.log(this.expList)

    })
  }

}
