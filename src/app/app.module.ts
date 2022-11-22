import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './login/about/about.component';
import { TcComponent } from './tc/tc.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RememberComponent } from './remember/remember.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './login/navbar/navbar.component';
import { FormularioComponent } from './login/formulario/formulario.component';
import { AboutRememberComponent } from './remember/about-remember/about-remember.component';
import { NavbarHomeComponent } from './home/navbar-home/navbar-home.component';
import { FacturarComponent } from './facturar/facturar.component';
import { ReservarComponent } from './reservar/reservar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TarjetasComponent } from './reservar/tarjetas/tarjetas.component';
import { EfectivoComponent } from './reservar/efectivo/efectivo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    TcComponent,
    ConocenosComponent,
    HomeIndexComponent,
    CreateUserComponent,
    RememberComponent,
    HomeComponent,
    NavbarComponent,
    FormularioComponent,
    AboutRememberComponent,
    NavbarHomeComponent,
    FacturarComponent,
    ReservarComponent,
    ReportesComponent,
    TarjetasComponent,
    EfectivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
