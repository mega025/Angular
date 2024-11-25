import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Task} from "./interface/task";

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  private añadir: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  public añadir$: Observable<Task[]> = this.añadir.asObservable();


  add(task: Task): void {
    const currentTasks = this.añadir.value;
    this.añadir.next([...currentTasks, task]);
  }
}

