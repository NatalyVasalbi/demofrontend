import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoadingComponent } from './commons/loading/loading.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/components/home-header/home-header.component';
import { HomeFooterComponent } from './home/components/home-footer/home-footer.component';
import { HomeMenuComponent } from './home/components/home-menu/home-menu.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeMenuComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
