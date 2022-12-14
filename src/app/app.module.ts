import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { AboutComponent } from './component/about/about.component';
import { EducationComponent } from './component/education/education.component';
import { SkillComponent } from './component/skill/skill.component';
import { ProyectsComponent } from './component/proyects/proyects.component';
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienceComponent,
    AboutComponent,
    EducationComponent,
    SkillComponent,
    ProyectsComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
