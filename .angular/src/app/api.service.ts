import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:8081/";

  constructor(private http: HttpClient) {}

  getHeaders(){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return headers;
  } 

  get(path: string) {
    return this.http.get(this.baseurl + path, {headers:this.getHeaders()});
  }

  post(path: string, data: any) {
    return this.http.post(this.baseurl + path, data, {headers:this.getHeaders()});
  }

  delete(path: string) {
    return this.http.delete(this.baseurl + path, {headers:this.getHeaders()});
  }

  put(path: string, data: any) {
    return this.http.put(this.baseurl + path, data, {headers:this.getHeaders()});
  }


  postLogin(path: string, data: any) {
    return this.http.post(this.baseurl + path, data, {headers:this.getHeaders()});
  }






//   get() {
//     let path = "/admins/"; 
//     return this.http.get(this.baseurl + path);
//   }

//   getById() {
//     let id:number = 1;  
//     let path = "/admins/"+ id; 
//     return this.http.get(this.baseurl + path);
//   }

//   post(data:any) {
//     let id:number = 0;
//     let path = "/admins/" + id; 
//     return this.http.post(this.baseurl + path, data);
//   }

//   delete(data:any) {
//     let id:number = 0;
//     let path = "/admins/" + id;
//     return this.http.delete(this.baseurl + path, data);
//   }

//   put(data: any) {
//     let id:number = 0
//     let path = "/admins/" + id;
//     return this.http.put(this.baseurl + path, data);
//   }

}
