import { Routes } from '@angular/router';

import { CategoriaComponent } from '@categorias/components/categoria/categoria.component';
import { ListHistoriaComponent } from './domains/historiaClinica/pages/list-historia/list-historia.component';
import { ListcategoriaComponent } from './domains/categorias/pages/listcategoria/listcategoria.component';
import { HistoriaClinicaComponent } from './domains/historiaClinica/components/historia-clinica/historia-clinica.component';
import { ListaprofesionalesComponent } from './domains/profesionales/pages/listaprofesionales/listaprofesionales.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
 import { ListComponent } from './domains/products/pages/list/list.component';
 import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
 import { HomeComponent } from './domains/home/components/home/home.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { LoginComponent } from './domains/auth/components/login/login.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { AutoconfianzaComponent } from '@categorias/pages/autoconfianza/autoconfianza/autoconfianza.component';
import { AutoestimaComponent } from '@categorias/pages/autoestima/autoestima/autoestima.component';
import { AmorpropioComponent } from '@categorias/pages/amorpropio/amorpropio/amorpropio.component';
import { ProfesionalesComponent } from '@profesionales/components/profesionales/profesionales.component';
import { RecursosComponent } from './domains/recursos/components/recursos/recursos.component';
import { ContactoComponent } from '@info/pages/contacto/contacto.component';

export const routes: Routes = [

    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'home',
                component:HomeComponent
            },

            {
                path:'listproduct',
                component:ListComponent
            },
            {
                path:'recursos',
                component:RecursosComponent
            },
            {
                path:'contacto',
                component:ContactoComponent
            },
            {
                path:'product:/id',
                component:ProductDetailComponent
            },

            {
                path:'list-historia',
                component:ListHistoriaComponent
            },
            {
                path:'listadocategoria',
                component:ListcategoriaComponent
            },
            {
                path:'historia',
                component:HistoriaClinicaComponent
            },
            {
                path:'listprofesionales',
                component:ListaprofesionalesComponent
            },
            {
                path:'about',
                component:AboutComponent
            },
            {
                path:'categoria',
                component:CategoriaComponent
            },
            {
                path:'amorpropio',
                component:AmorpropioComponent
            },
            {
                path:'autoestima',
                component:AutoestimaComponent
            },
            {
                path:'autoconfianza',
                component:AutoconfianzaComponent
            },
            {
                path:'profesionales',
                component:ProfesionalesComponent
            },



        ]
    },

    {
        path:'login',
        component:LoginComponent
    },




    {
        path:'**',
        component:NotFoundComponent
    },





];
