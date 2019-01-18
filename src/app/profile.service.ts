import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'a427cef0d946c7f7df23';
  private clientsecret = '9a2bab196c8c42c6984eb0f85c68bcac01e04556';

  constructor(private http:HttpClient) {
    this.username = 'liciolentimo';
   }
   getProfile(){
      return this.http.get("https://api.github.com/users/liciolentimo?access_token=6021f4f77f5f5842792f18be910f8a68907817d0");
      // .map(result=>result.json());
   }
}
