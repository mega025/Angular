export interface Usuario {

}
export interface NewUser {
  username: string;
  password: string;
  nombre: string;
  email: string;
  edad: number;
}
export interface LoginUser{
  username: string;
  password: string;
}
export interface AllUsers{
  id: number;
  nombre: string;
  email: string;
  edad: number;
}
