import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthInterceptor } from './AuthInterceptor';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    NewsComponent,
    LoginPageComponent,
    SignUpComponent,
    CoursesComponent,
    NewsDetailComponent,
    // ?
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
