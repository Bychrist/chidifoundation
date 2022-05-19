import { CoolHttp } from '@angular-cool/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss']
})
export class BeneficiaryComponent implements OnInit {

  constructor(private coolHttp:CoolHttp,private _apiService: ApiService) { }

  ngOnInit(): void {

    this.getBeneficiaries()
  }
beneficiaries:any[] = [];
url = environment.apiUrl;

  getBeneficiaries()
{
   //this.beneficiaries = await this.coolHttp.getAsync(`${this.url}/wp/v2/posts?categories=3`)
    this._apiService.getAllBeneficiaries().subscribe(

          (response:any) =>{
              this.beneficiaries = response.body
            //  console.log(response.headers.get('X-WP-Total'))
              //console.log(response.headers.get('X-WP-TotalPages'))
          },
          (error) =>{



          }

)


}


titleConversion(data:any)
{
  let myStringArray = data.split("|")
      return myStringArray;
}




}
