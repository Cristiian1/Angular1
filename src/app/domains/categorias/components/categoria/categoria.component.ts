import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';


// import { LayoutComponent } from '@shared/components/layout/layout.component';
import { CategoriaservicesService } from '@categorias/services/categoriaservices.service';
import { Categoria } from '@categorias/models/categoria.model';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref,],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  @Input({required:true}) categoria!: Categoria;

  categoriaApi : Categoria[] = [];

  constructor(private CategoriaservicesService: CategoriaservicesService ){}

  ngOnInit(): void {
    // this.getMethod();
    // this.getdato(1);


  }
  getCategoria(){
    this.CategoriaservicesService.getCategoria().subscribe({
      next: (response) => {
        console.log(response);
        this.categoriaApi = response;
      },
    });
  }
 
  postCategoria(categoriaApi : Categoria){
    this.CategoriaservicesService.postCategoria(categoriaApi  ).subscribe({
      next: (response) => {
        console.log(response);
       
        
      },
    });
  }
  putCategoria(  id_categoria: number, nombre: string, descripcion: string ,imagen: string ,categoriaApi : Categoria){
    this.CategoriaservicesService.putCategoria(id_categoria, nombre,descripcion, imagen ,categoriaApi ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  patchCategoria(  id_categoria: number, nombre: string, descripcion: string ,imagen: string, categoriaApi : {}){
    this.CategoriaservicesService.patchCategoria(id_categoria,nombre, descripcion, imagen ,categoriaApi ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  deleteCategoria(  id_categoria: number, nombre: string, descripcion: string ,imagen: string){
    this.CategoriaservicesService.deleteCategoria(id_categoria,nombre, descripcion, imagen ).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

}
