import { Component, OnInit } from '@angular/core';
import { JobProfileService } from 'src/app/services/job-profile.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
 proyectsList:any;
  constructor(private jobProfile: JobProfileService) { }

  ngOnInit(): void {
    this.jobProfile.getData().subscribe(data =>{
      this.proyectsList = data.proyects;
      console.log(this.proyectsList);

    })
  }

}
