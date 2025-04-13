import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

// import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [appRoutingProviders, provideHttpClient()],
}).catch((err) => console.error(err));
