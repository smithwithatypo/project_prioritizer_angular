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

  constructor(private fb: FormBuilder) { 
    
  }

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

  onClear() {
    this.projects_list = [];
  }
}
