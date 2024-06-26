import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from "@abacritt/angularx-social-login";
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
    provideRouter(routes),
    //We are building a provider. Version 2.2.0 of package doesn't provide one.
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            //Remove the .apps.googleusercontent.com from the client id
            //MAKE SURE TO HIDE IT FROM GITHUB
            "829528583468-uhjg2qsmbsp521i0pne4v04oea2ngqai"
          ),
        },
      ],
      onError: (err) => {
        debugger;
        console.error(err);
      },
    } as SocialAuthServiceConfig,
  },
  //more providers can go here
]
};

