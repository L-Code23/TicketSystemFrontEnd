import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: SocialUser = {} as SocialUser;
  currentUser: UserModel = {} as UserModel;
  loggedIn: boolean = false;
  users: UserModel[] = [];
  url: string = "https://localhost:7204/";

  constructor(private socialAuthServiceConfig: SocialAuthService, private http:HttpClient) { }
  getAll(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.url}api/User`);
  }
  Login() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
      if(this.loggedIn){
        this.addUserToDB(this.user);
      }
    });
  }
  //login component doesn't account for logging out.
  signOut(): void {
    this.socialAuthServiceConfig.signOut();
  }

  

  addUser(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(`${this.url}api/User`, user);
  }

  addUserToDB(u: SocialUser){
    let newUser: UserModel = {
      id: 0,
      firstName: u.firstName,
      lastName: u.lastName,
      email: u.email,
      photoUrl: u.photoUrl
    }

    this.addUser(newUser).subscribe((response: UserModel) =>{
      console.log(response);
      this.currentUser = response;
      this.getAll().subscribe((response: UserModel[])=>{
        console.log(response);
        this.users = response;
      });
    })
   }
}
