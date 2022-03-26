import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PresentationComponent } from './presentation/presentation.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { InterestComponent } from './interest/interest.component';
import { StudyComponent } from './education/study/study.component';
import { CompanyComponent } from './experience/company/company.component';
import { MissionComponent } from './experience/company/mission/mission.component';
import { SkillBarComponent } from './skill/skill-bar/skill-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    InterestComponent,
    StudyComponent,
    CompanyComponent,
    MissionComponent,
    SkillBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TranslocoRootModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
