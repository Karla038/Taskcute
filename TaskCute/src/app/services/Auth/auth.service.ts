// import { Injectable, HostListener } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, ReplaySubject, map, of} from 'rxjs';
// import { enviromentAuth } from '../../environments/environment.auth';
// import { Respuesta } from '../../models/Respuesta';
// import { Usuario } from '../../models/Usuario';
// import * as jwt_decode from 'jwt-decode';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   public fechaExpiracion:any;

//   constructor(private httpClient: HttpClient, private _router: Router) { }

//   private url: string = `${enviromentAuth.urlAuth}/api/auth`;
//   private _usuario: ReplaySubject<Usuario> = new ReplaySubject<Usuario>(1);
//   public autenticado: boolean = false;
//   private httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };

//   set accessToken(token: string) {
//     localStorage.setItem('accessToken', token);
//   }

//   get accessToken(): string {
//     return localStorage.getItem('accessToken') ?? '';
//   }

//    /**
//  * Setter & getter for user
//  *
//  * @param value
//  */
//    set usuario(value: Usuario) {
//     // Store the value
//     this._usuario.next(value);
//   }

//   get usuario$(): Observable<Usuario> {
//     return this._usuario.asObservable();
//   }

//   get headers(){
//     return {
//       headers:{
//         'x-token':this.accessToken
//       }
//     }
//   }


//   checarAutenticacion(): Observable<boolean> {
//     // Check if the user is logged in
//     if (this.accessToken && this.accessToken) {
//       console.log("autenticado checarAutenticacion")
//       return of(true);
//     }

//     // Check the access token availability
//     if (!this.accessToken) {
//       console.log('no false 2')

//       return of(false);
//     }
//     console.log('false 2')

//     return of(false);
//   }

//   public signOut(): Observable<any> {
//     // Remove the access token from the local storage
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('usuario');
//     this.autenticado = false;

//     // this._router.navigate(['users/login']);
//     // Return the observable
//     return of(true);
//   }

//   validarToken(): Observable<boolean> {
//     console.log("Validar Token");
//     const accessToken = localStorage.getItem('accessToken') || '';
//     // Obteniendo los headers correctamente
//     return this.httpClient.get(`${this.url}/renovar`, {
//       headers: {
//         'x-token': this.accessToken
//       }
//     }).pipe(
//       map((resp: any) => {
//         console.log(resp);
//         const { email, nombre, role , uid } = resp.usuarioDB;
//         this.usuario = new Usuario(
//           nombre, email, '', role, uid
//         );
//         console.log("renovar" + resp.token);
//         this.fechaExpiracion = this.decodeToken();
//         localStorage.setItem('fechaExpiracion', this.fechaExpiracion.exp);
//         return true;
//       }),
//     //   catchError(error => of(false))
//     );
//   }


//   public decodeToken(): string {
//     const token = this.accessToken;
//     console.log(token)

//     const decodedToken: any = jwt_decode.default(token);
//     console.log(decodedToken)
//     return decodedToken.uid;
//   }



//   public decodificarPorId(respuesta: Respuesta) {
//     console.log(respuesta)
//     this.accessToken = respuesta.data;
//     console.log(this.accessToken)
//     this.autenticado = true;
//     this.fechaExpiracion = jwt_decode.default(this.accessToken);
//     localStorage.setItem('fechaExpiracion',this.fechaExpiracion.exp)
//     console.log('fechaExpiracion')
//     console.log(this.fechaExpiracion)
//     const numero: string = this.decodeToken();

//     this.buscarPorId(numero).subscribe(data => {
//       console.log(data)
//       this.usuario = data.data;
//       setTimeout(() => {
//         localStorage.setItem('usuario', JSON.stringify(data.data))
//       }, 2000)

//     //   // location.reload();

//     // })
//   }

//   checharLocalStorage() {
//     console.log("checharLocalStorage");
//     const usuario = localStorage.getItem('usuario');
//     if (usuario !== '' && usuario !== null && usuario !== undefined) {
//       localStorage.removeItem('usuario');
//     }
//   }


//   // Metodo donde hara la peticion HTTP para el endpoind de node
//   // Observble nos ayudara a suscribirnos en otro componente y regresara
//   // un arreglo especialidad
//   // @return
//   // publico porque quiero acceder a ello
//   public registrarUsuario(usuario: Usuario): Observable<Respuesta> {
//     return this.httpClient.post<Respuesta>(`${this.url}/nuevo`, usuario, this.httpOptions)
//   }

//   public iniciarSesion(usuario: Usuario): Observable<Respuesta> {
//     return this.httpClient.post<Respuesta>(`${this.url}/`, usuario);
//   }

//   public buscarPorId(id: string): Observable<Respuesta> {
//     return this.httpClient.get<Respuesta>(`${this.url}/buscar_id/${id}`);
//   }


// }



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, map, of } from 'rxjs';
import { enviromentAuth } from '../../environments/environment.auth';
import { Respuesta } from '../../models/Respuesta';
import { Usuario } from '../../models/Usuario';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public fechaExpiracion: any;

  constructor(private httpClient: HttpClient, private _router: Router) { }

  private url: string = `${enviromentAuth.urlAuth}/api/auth`;
  private _usuario: ReplaySubject<Usuario> = new ReplaySubject<Usuario>(1);
  public autenticado: boolean = false;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  set usuario(value: Usuario) {
    this._usuario.next(value);
  }

  get usuario$(): Observable<Usuario> {
    return this._usuario.asObservable();
  }

  get headers() {
    return {
      headers: {
        'x-token': this.accessToken
      }
    }
  }

  checharAutenticacion(): Observable<boolean> {
    if (this.accessToken) {
      console.log("autenticado checharAutenticacion")
      return of(true);
    }
    console.log('no false 2')
    return of(false);
  }

  public signOut(): Observable<any> {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('usuario');
    this.autenticado = false;
    return of(true);
  }

  validarToken(): Observable<boolean> {
    console.log("Validar Token");
    return this.httpClient.get(`${this.url}/renovar`, this.headers).pipe(
      map((resp: any) => {
        console.log(resp);
        const { email, nombre, role, uid } = resp.usuarioDB;
        this.usuario = new Usuario(nombre, email, '', role, uid);
        console.log("renovar" + resp.token);
        this.fechaExpiracion = this.decodeToken();
        localStorage.setItem('fechaExpiracion', this.fechaExpiracion.exp);
        return true;
      }),
    );
  }

  public decodeToken(): any {
    const token = this.accessToken;
    console.log(token)
    const decodedToken: any = jwtDecode(token);
    // console.log(decodedToken)
    // return decodedToken;
  }

  public decodificarPorId(respuesta: Respuesta) {
    console.log(respuesta)
    this.accessToken = respuesta.data;
    console.log(this.accessToken)
    this.autenticado = true;
    this.fechaExpiracion = jwtDecode(this.accessToken,  { header: true });
    localStorage.setItem('fechaExpiracion', this.fechaExpiracion.exp)
    console.log('fechaExpiracion')
    console.log(this.fechaExpiracion)
    const numero: string = this.decodeToken().uid;

    this.buscarPorId(numero).subscribe(data => {
      console.log(data)
      this.usuario = data.data;
      setTimeout(() => {
        localStorage.setItem('usuario', JSON.stringify(data.data))
      }, 2000)
    });
  }

  checharLocalStorage() {
    console.log("checharLocalStorage");
    const usuario = localStorage.getItem('usuario');
    if (usuario !== '' && usuario !== null && usuario !== undefined) {
      localStorage.removeItem('usuario');
    }
  }

  public registrarUsuario(usuario: Usuario): Observable<Respuesta> {
    return this.httpClient.post<Respuesta>(`${this.url}/nuevo`, usuario, this.httpOptions);
  }

  public iniciarSesion(usuario: Usuario): Observable<Respuesta> {
    return this.httpClient.post<Respuesta>(`${this.url}/`, usuario);
  }

  public buscarPorId(id: string): Observable<Respuesta> {
    return this.httpClient.get<Respuesta>(`${this.url}/buscar_id/${id}`);
  }
}
