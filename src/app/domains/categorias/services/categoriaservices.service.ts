
import { Injectable, inject } from '@angular/core';
import { Categoria } from '@categorias/models/categoria.model';
import { HttpClient } from '@angular/common/http';



import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaservicesService {

  private urlAPI = 'http://127.0.0.1:8000/API/Categoria/';
  

  constructor (private http: HttpClient) {}

  public getCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.urlAPI}`);
  };
 

  public postCategoria( categoriaApi : Categoria):Observable<any>{
    return this.http.post(`${this.urlAPI}`, categoriaApi); 
  };

  public putCategoria( id_categoria: number, nombre: string, descripcion: string ,imagen: string  ,categoriaApi : Categoria):Observable<any>{
    return this.http.put(`${this.urlAPI}/{id_categoria}{nombre}{descripcion}{imagen}`, categoriaApi); 
  };

  public patchCategoria( id_categoria: number, nombre: string, descripcion: string ,imagen: string,categoriaApi : {}):Observable<any>{
    return this.http.patch(`${this.urlAPI}/{id_categoria}{nombre}{descripcion}{imagen}`, categoriaApi); 
  };

  public deleteCategoria( id_categoria: number, nombre: string, descripcion: string ,imagen: string):Observable<any>{
    return this.http.delete<any>(`${this.urlAPI}/{id_motivo_consulta}{motivo_consulta}`); 
  };


 
 
}
