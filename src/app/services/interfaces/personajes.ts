export interface Personajes {
  id: number;
  name: string;
  description?: string;
  thumbnail: {
    extension:string;
    path: string;
  }

}
