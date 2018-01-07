import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {SkillsComponent, SkillsComponentDialog} from './skills/skills.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatLineModule, MatListModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillsComponentDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatProgressBarModule,
    MatLineModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    SkillsComponentDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
