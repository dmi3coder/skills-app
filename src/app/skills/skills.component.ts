import {Component, Inject, OnInit} from '@angular/core';
import {Skill} from '../Skill';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  constructor(public dialog: MatDialog) {
    const skillTexts = 'JAVA, JavaScript, HTML, CSS/SASS, SOAP, Siebel, Spring, Spring MVC, Spring WS, Oracle, JDBC, Linux, WebSphere 7/8, Tomcat, Jenkins, JIRA, Angular, NodeJs, karma test, karma e2e tests, Bower, Grunt, Gulp, Maven, Mockito, Power mock, jUnit, FitNesse, Selenium, Cucumber';
    for (const skillText of skillTexts.split(',')) {
      this.skills.push({id: 0, name: skillText, level: Math.floor((Math.random() * 100) + 1)});
    }
  }

  ngOnInit() {
  }

  openDialog(skill: Skill): void {
    const dialogRef = this.dialog.open(SkillsComponentDialog, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}


@Component({
  selector: 'app-skills-dialog',
  templateUrl: './skills-dialog.component.html'
})
export class SkillsComponentDialog { }

