import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewsComponent } from './news/news.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signUp', component: SignUpComponent},
  // {path: 'news/', component: },
  {path: 'news/:category_id', component: NewsComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
