import { Component, OnInit } from '@angular/core';
import {AddTaskService} from "../service/add-task.service";
import {Task} from "../service/interface/task";
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tareasEstaSemana: Task[] = [];
  ocultar: boolean = false;
  ocultar2: boolean = false;
  ocultar3: boolean = false;

  constructor(
      private addTaskService: AddTaskService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.addTaskService.añadir$.subscribe((tasks) => {
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());

      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate() + (6 - today.getDay()));

      this.tareasEstaSemana = tasks.filter((task) => {
        const taskDate = new Date(task.date);
        return taskDate >= startOfWeek && taskDate <= endOfWeek;
      });
    });
  }

  toggleOcultar(){
    this.ocultar = !this.ocultar;
  }

  toggleOcultar2(){
    this.ocultar2 = !this.ocultar2;
  }

  toggleOcultar3(){
    this.ocultar3 = !this.ocultar3;
  }

  anadir(){
    this.router.navigate(['/Anadir']);
  }

  editar(){
    this.router.navigate(['/Editar']);
  }
}
