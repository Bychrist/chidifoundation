import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
  }
EmailProfile ={Name:"",Message:"",Email:"",Phone:"",Subject:""}
  Register: string = "Send Message";
sendEmail(contactForm:any)
{

      if(contactForm.valid)
      {
            this.Register = "Sending.........";
           $("#myform").prop('disabled', true); //disable

            this._apiService.SendMail(contactForm.value).subscribe(

            (response:any)=>{

                $("#myform").prop('disabled', false); //enable
              contactForm.reset()
              alert("Thank you, your email was sent")
              // this.EmailProfile = {Name:'',Message:"",Subject:"", Email:"",Phone:""}

                this.Register = "Send Message";
            },

            (error:any)=>{
              alert("Sorry, your email was not sent")
              $("#myform").prop('disabled', false); //enable
              this.Register = "Send Message";

            }




            )
      }
      else{


        console.log(contactForm)

      }


}


}
