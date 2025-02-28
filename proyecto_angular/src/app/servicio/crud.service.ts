import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/empleados/';

    constructor(private clienteHttp:HttpClient) { }

    AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
      return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
    }

    ObtenerEmpleados(){
      return this.clienteHttp.get(this.API);

    }

    BorrarEmpleado(id:any):Observable<any>{
      return this.clienteHttp.get(this.API+"?borrar="+id);
    }

    ObtenerEmpleado(id:any):Observable<any>{
      return this.clienteHttp.get(this.API+"?consultar="+id);

    }

    EditarEmpleado(id:any,datosEmpleado:any):Observable<any>{
      return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
    }

}
