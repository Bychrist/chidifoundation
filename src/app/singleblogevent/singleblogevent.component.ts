import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-singleblogevent',
  templateUrl: './singleblogevent.component.html',
  styles: [
  ]
})
export class SingleblogeventComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.getPost()
  }

  post:any = {};


  getPost()
{
    this.route.paramMap.subscribe(params => {
      console.log(params);
      let id = params.get('id');
      let products = this.apiService.getPost(id).subscribe(
          (response:any) => {
              this.post = response.body
          console.log(this.post)
          },
          (error:any) => {
            console.log(error)

            }

      );

    });
}




}
