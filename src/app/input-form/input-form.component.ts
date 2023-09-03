import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  projectForm!: FormGroup;
  projects_list: any = [];
  results: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      project_name: ['', Validators.required],
      importance: [0, [Validators.required, Validators.min(0), Validators.max(20)]],
      urgency: [0, [Validators.required, Validators.min(0), Validators.max(20)]]
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const formValues = this.projectForm.value;
      this.projects_list.push(formValues);
      console.log(this.projects_list);
    }
  }

  onClearForm() {
    this.projectForm.reset();
  }

  onClearProjects() {
    this.projectForm.reset();
    this.projects_list = [];
    this.results = [];
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
