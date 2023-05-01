import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GoogleApiService, UserInfo } from 'src/app/_Auth/google-api.service';

@Component({
  selector: 'app-mailboxes-component',
  templateUrl: './mailboxes-component.component.html',
  styleUrls: ['./mailboxes-component.component.css']
})
export class MailboxesComponentComponent {
  title = 'angular-google-oauth-example';

  mailSnippets: string[] = []
  userInfo!: UserInfo;

  constructor(private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe( info => {
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }

  async getEmails() {
    if (!this.userInfo) {
      return;
    }

    const userId = this.userInfo?.info.sub as string
    const messages = await lastValueFrom(this.googleApi.emails(userId))
    messages.messages.forEach( (element: any) => {
      const mail = lastValueFrom(this.googleApi.getMail(userId, element.id))
      mail.then( mail => {
        this.mailSnippets.push(mail.snippet)
      })
    });
  }


}