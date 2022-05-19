import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { delay } from "rxjs/operators";
import { CoolHttp } from '@angular-cool/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httClient: HttpClient, private coolHttp: CoolHttp) { }

 url:any = environment.apiUrl

  emailUrl: any = environment.emailUrl


  getAllPosts(): Observable<HttpResponse<any[]>>
{
    return this.httClient.get<any[]>(`${this.url}/wp/v2/posts?per_page=10&page=1&categories=5`, { observe: 'response' });

}


  PostPagination(page: number): Observable<HttpResponse<any[]>> {
    return this.httClient.get<any[]>(`${this.url}/wp/v2/posts?per_page=10&page=${page}&categories=5`, { observe: 'response' });

  }



  getPost(id:any): Observable<HttpResponse<any>> {
    return this.httClient.get<any>(`${this.url}/wp/v2/posts/${id}`, { observe: 'response' });

  }



  getAllBeneficiaries(): Observable<HttpResponse<any[]>> {
    return this.httClient.get<any>(`${this.url}/wp/v2/posts?categories=3`, { observe: 'response' });

  }

  shuffle(array: any) {
    return array.sort(() => Math.random() - 0.5);
  }


  SendMail(data: any) {

console.log(data)
   return this.httClient.post(`${this.emailUrl}`, data, { responseType: 'text' });

  }




}
