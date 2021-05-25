import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ViewService} from "./shared/service/view.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private static readonly root = "https://wheeler-resume-app.azurewebsites.net/api";

  static readonly api = {
    certification: {
      retrieve: `${AppComponent.root}/certification/retrieve`
    },
    education: {
      retrieve: `${AppComponent.root}/education/retrieve`
    },
    experience: {
      retrieve: `${AppComponent.root}/experience/retrieve`
    },
    project: {
      retrieve: `${AppComponent.root}/project/retrieve`
    },
    skill: {
      retrieve: `${AppComponent.root}/skill/retrieve`
    },
    visitor: {
      count: `${AppComponent.root}/visitor/count`,
      create: `${AppComponent.root}/visitor/create`,
      retrieve: `${AppComponent.root}/visitor/retrieve`
    }
  }
  // rolesAll = ['Cloud Architect', 'Cloud Enthusiast', 'Senior Software Developer'];
  // rolesIdx = 1;

  aboutShouldRender = false;

  certificationShouldEnable = true;
  certificationShouldRender = false;

  educationShouldEnable = true;
  educationShouldRender = false;

  experienceShouldEnable = true;
  experienceShouldRender = false;

  projectShouldEnable = true;
  projectShouldRender = false;

  skillShouldEnable = true;
  skillShouldRender = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private viewService: ViewService){}

  ngOnInit(): void {
    this.viewService.certificationShouldEnable$.subscribe(val => {
      this.certificationShouldEnable = val;
      this.changeDetectorRef.detectChanges();
    });
    this.viewService.certificationShouldRender$.subscribe(val => {
      this.certificationShouldRender = val;
      this.changeDetectorRef.detectChanges();
    });

    this.viewService.educationShouldEnable$.subscribe(val => {
      this.educationShouldEnable = val;
      this.changeDetectorRef.detectChanges();
    });
    this.viewService.educationShouldRender$.subscribe(val => {
      this.educationShouldRender = val;
      this.changeDetectorRef.detectChanges();
    });

    this.viewService.experienceShouldEnable$.subscribe(val => {
      this.experienceShouldEnable = val;
      this.changeDetectorRef.detectChanges();
    });
    this.viewService.experienceShouldRender$.subscribe(val => {
      this.experienceShouldRender = val;
      this.changeDetectorRef.detectChanges();
    });

    this.viewService.projectShouldEnable$.subscribe(val => {
      this.projectShouldEnable = val;
      this.changeDetectorRef.detectChanges();
    });
    this.viewService.projectShouldRender$.subscribe(val => {
      this.projectShouldRender = val;
      this.changeDetectorRef.detectChanges();
    });

    this.viewService.skillShouldEnable$.subscribe(val => {
      this.skillShouldEnable = val;
      this.changeDetectorRef.detectChanges();
    });
    this.viewService.skillShouldRender$.subscribe(val => {
      this.skillShouldRender = val;
      this.changeDetectorRef.detectChanges();
    });
  }

  toggleAboutShouldRender(){
    this.aboutShouldRender = !this.aboutShouldRender;
  }

  toggleCertificationShouldRender(){
    if(this.certificationShouldEnable) {
      this.viewService.certificationShouldRender(!this.certificationShouldRender);
    }
  }

  toggleEducationShouldRender(){
    if(this.educationShouldEnable) {
      this.viewService.educationShouldRender(!this.educationShouldRender);
    }
  }

  toggleExperienceShouldRender(){
    if(this.experienceShouldEnable) {
      this.viewService.experienceShouldRender(!this.experienceShouldRender);
    }
  }

  toggleProjectShouldRender(){
    if(this.projectShouldEnable) {
      this.viewService.projectShouldRender(!this.projectShouldRender);
    }
  }

  toggleSkillShouldRender(){
    if(this.skillShouldEnable) {
      this.viewService.skillShouldRender(!this.skillShouldRender);
    }
  }
}
