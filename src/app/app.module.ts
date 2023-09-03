import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';



import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { GraphComponent } from './graph/graph.component';
import { TestingThisDeleteComponent } from './testing-this-delete/testing-this-delete.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    GraphComponent,
    TestingThisDeleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
