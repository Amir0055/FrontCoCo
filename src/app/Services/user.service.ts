import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = 'http://localhost:8088/';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData :any) {
    return this.httpclient.post(this.PATH_OF_API + 'api/v1/auth/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
  public getConnectedUser(mail :string){
    return this.httpclient.get<any>(this.PATH_OF_API +"api/v1/auth/GetbyMail/"+mail);
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + 'api/v1/demo-controller/profile', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + 'api/v1/demo-controller/Dashboard', {
      responseType: 'text',
    });
  }

  public autorityMatch(allowedRoles:any):any {
    let isMatch = false;
    const userAuthoritys: any = this.userAuthService.getAutoritys();
   
    if (userAuthoritys != null && userAuthoritys) {//&& userAuthoritys ->at least content value
      for (let i = 0; i < userAuthoritys.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userAuthoritys[i].name === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
