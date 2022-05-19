import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-blogandevent',
  templateUrl: './blogandevent.component.html',
  styleUrls: ['./blogandevent.component.scss']
})
export class BlogandeventComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
       this.getPost()
  }

  previousBtn = true
  nextBtn = false;
  previousPage = 0;
  nextPage = 0;
  totalPages = 0
  totalPosts = 0;
  posts: any[] = [];
  postsToView: any[] = [];
  url: any = environment.apiUrl

   getPost() {

    this.apiService.getAllPosts().subscribe(
    (response) => {

      //  console.log(response.headers.get('X-WP-Total'))
      //  console.log(response.headers.get('X-WP-TotalPages'))
        this.posts = this.apiService.shuffle(response.body)
        this.totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0' )
       // console.log(this.posts)
        if ( this.totalPages == 1 )
        {
          this.previousPage = 1
           this.nextPage = 1
          this.previousBtn = true
          this.nextBtn = true;

        }

        else{

          this.previousPage = 1
          this.nextPage = 2
          this.previousBtn = true
          this.nextBtn = false;


        }

    },
(error)=>{
   // console.log(error)
}

)







  }



  clickPrevious()
  {

      if(this.previousPage <= 1)
      {
          this.previousPage = 1
          if(this.totalPages < 2)
          {
              this.nextPage = 1
          }
          else
          {
            this.nextPage = 2
          }

        this.previousBtn = true
        this.nextBtn = false;

      }
      else{


        this.nextPage -= 1
        this.previousPage -= 1

        this.previousBtn = false
        this.nextBtn = false;


      }


      this.apiService.PostPagination(this.previousPage).subscribe(
        (response) =>{
          this.posts = this.apiService.shuffle(response.body)
        },
        (error) => {

        }

      )



  }

  clickNext() {

    if (this.nextPage >= this.totalPages  )
     {
       this.nextPage = this.totalPages
       this.previousPage = this.totalPages - 1

      this.previousBtn = false
      this.nextBtn = true;

     }
     else{

        this.nextPage +=1
        this.previousPage +=1

      this.previousBtn = false
      this.nextBtn = false;

     }


    this.apiService.PostPagination(this.nextPage).subscribe(
      (response) => {
        this.posts = this.apiService.shuffle(response.body)
      },
      (error) => {

      }

    )



  }

























}
