import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AddTaskService} from "../service/add-task.service";

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
})
export class AnadirComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private addTaskService: AddTaskService) {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const task = {
        id: Date.now(),
        ...this.formulario.value,
      };

      this.addTaskService.add(task);

    }
  }
}
