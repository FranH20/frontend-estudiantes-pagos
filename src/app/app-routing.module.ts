import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "estudiantes",
    pathMatch: "full"
  },
  {
    path: 'estudiantes',
    loadChildren: () => import("./estudiantes/estudiantes.module").then( m => m.EstudiantesModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import("./pagos/pagos.module").then( m => m.PagosModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import("./reportes/reportes.module").then( m => m.ReportesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
