import { Routes } from '@angular/router';
import { ListaClasesComponent } from './componentes/lista-clases/lista-clases.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "principal-component",
        pathMatch: "full"
    },
    {
        path: "principal-component",
        component: PrincipalComponent
    },
    {
        path: "lista-clases",
        component: ListaClasesComponent
    },
];