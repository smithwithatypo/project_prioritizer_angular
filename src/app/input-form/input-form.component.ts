import { Component } from '@angular/core';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  projects_list: any = [];
  results: any[] = [];

  projectNameValue: string = '';
  importanceValue: any = 10;
  urgencyValue: any = 10;

  onSubmit() {
    this.projects_list.push(
      {"project_name": this.projectNameValue, 
      "importance": this.importanceValue, 
      "urgency": this.urgencyValue}
      );
  }


  onClearForm() {
    this.projectNameValue = '';
    this.importanceValue = 10;
    this.urgencyValue = 10;
  }


  calculateResults() {
    let r: any[] = [];
    let total: number = 0;

    for (let i = 0; i < this.projects_list.length; i++) {
      total = Math.round(((this.projects_list[i].importance * .6) + (this.projects_list[i].urgency * 1.4)) * 10) / 10;

      // if imp < 10 and u < 10: "delete"
      if (this.projects_list[i].importance < 10 && this.projects_list[i].urgency < 10) {
        r.push([total, this.projects_list[i].project_name, "delete it"]);
      }
      // if imp <= 10 and u >= 10: "delegate"
      else if (this.projects_list[i].importance <= 10 && this.projects_list[i].urgency >= 10) {
        r.push([total, this.projects_list[i].project_name, "delegate it"]);
      }
      // if imp >= 10 and u <= 10: "schedule"
      else if (this.projects_list[i].importance >= 10 && this.projects_list[i].urgency <= 10) {
        r.push([total, this.projects_list[i].project_name, "schedule it"]);
      }
      // if imp >= 10 and u >= 10: "do"
      else if (this.projects_list[i].importance >= 10 && this.projects_list[i].urgency >= 10) {
        r.push([total, this.projects_list[i].project_name, "do it"]);
      }
    }

    return r.sort((a, b) => b[0] - a[0]);

  }
  
  onCalculateResults() {
    this.results = this.calculateResults();
  }
}
