import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService1Service {

  url:string="http://localhost:8082/register";
  // url:string="http://localhost:3000/registration";

  url1:string="http://localhost:8082/login";
  url2:string="http://localhost:8083/allfurnitures";
  url3:string="http://localhost:8083/save";
  url4:string="http://localhost:8083/update/{title}";

  url5:string="http://localhost:8083/delete";

  constructor(private httprequest:HttpClient) { }

  addReg(regData:any):Observable<any>{
    // console.log("one");
     console.log(regData);
     return this.httprequest.post(this.url,regData);
  }
  addLogin(logData:any):Observable<any>
  {
    return this.httprequest.post(this.url1,logData);
  }
  addAllFurniture(data:any):Observable<any>//takes obj as a parameter-data- to add to array
  {
    return this.httprequest.post(this.url3,data);
  }
  getAllFurnitures():Observable<any[]>
  {
    return this.httprequest.get<any[]>(this.url2);
  }
  // editNotes(id:any,data:any):Observable<any>{
  //   return this.httprequest.put(this.url4+"/"+id,data);
  // }
  // getOneProduct(id:any){
  //   return this.httprequest.get<any>(this.url+"/"+id);
  // }
  deleteProduct(title:any){
    return this.httprequest.delete(this.url5+"/"+title);
  }
}
