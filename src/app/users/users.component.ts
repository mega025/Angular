import {Component, OnInit} from '@angular/core';
import {AllUsers, NewUser} from '../services/interfaces/usuario';
import {UsersService} from '../services/auth/users.service';
import {HttpClient} from '@angular/common/http';
import * as bootstrap from 'bootstrap'
import {PopupService} from '../services/utils/popup.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'

})
export class UsersComponent implements OnInit {
  showModal: boolean = false;
  users : AllUsers[] = []



  constructor(
    public usersService : UsersService,
    private http: HttpClient,
    private popupService: PopupService,
  ) {}
  ngOnInit() {
    this.popupService.loading(
      "cargando...",
      "Por Favor espere"
    ); this.AllUsers();
        this.popupService.close()
  }
  AllUsers(){
    this.usersService.AllUsers().subscribe({
    next: result => {
        this.users = result;
    }
    })
  }
  addNewUser(){
    //const modalElement = new bootstrap.Modal()
    const modalElement : HTMLElement | null = document.getElementById("myModal");
    if (modalElement) {
      const modalIntace = new bootstrap.Modal(modalElement)
      if (!this.showModal) {
        modalIntace.show
      }
    }
  }









}
