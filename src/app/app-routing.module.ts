import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculSeeComponent } from './calcul-see/calcul-see.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    component: LoginPageComponent,
    path: '',
  },
  {
    component: CalculSeeComponent,
    path: 'connected',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
