import { CoolHttp } from '@angular-cool/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';



declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService, private  coolHttp:CoolHttp) {

 }

  async ngOnInit() {
   await this.getPost()

  }

 posts:any[]=[];
 postsToView:any[]=[];
 url: any = environment.apiUrl

 async getPost()
{

   this.posts= await this.coolHttp.getAsync(`${this.url}/wp/v2/posts?categories=5`)
   let myShuffle = this.apiService.shuffle(this.posts)
   for (let i = 0; i < 3; i++) {

     this.postsToView.push(myShuffle[i]);

   }


}








}
