
export interface Estudiante {
  nid_persona: string;
  full_name: string;
  age: Edad;
  grado: string;
  foto_ruta: string;
}

export interface EstudianteCreacion {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fechaDeNacimiento: string;
  idGrado: number;
}

export interface Edad {
  years: number;
  months: number;
  days: number;
}
